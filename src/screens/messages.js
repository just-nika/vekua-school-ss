import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { firestore, firebase } from '../firebase/firebase.config';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Error from "./error";

export default function Messages() {
    const [messages, setMessages] = React.useState([]);
    const useStyles = makeStyles({
      root: {
        maxWidth: 275,
        // float: "left"
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    React.useEffect(() => {
        getMessages();
    }, [])
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const getMessages = async () => {
        const data = await firestore.collection("active-messages").where("name", "!=", "").get();
        console.log(data);
        setMessages(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
        console.log(data);
    }
    const updateMessage = async (id) => {
        await firestore.collection("messages").doc(id).update({
            status: "disabled"
        }).then(() => 
            firestore.collection("active-messages").doc(id).delete().then(() => getMessages())
        );
    }
    var user = firebase.auth().currentUser;
    if (user) {
        return (
            <div className="messages">
        {
                messages.map((message, index) => {
                    console.log(message.id)
                    return(
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    id #{message.code}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {message.title}
                                </Typography>
                                <Typography variant="body2" component="p" style={{textAlign: "start", fontSize: "13px", height: "200px", overflowX: "scroll", overflowY: "none"}}>
                                    <b>ნომერი:</b> {message.mobileNumber}; <br />
                                    <b>ელექტრონული ფოსტა:</b> {message.email}; <br />
                                    <b>სტატუსი:</b> {message.status}; <br />
                                    <br />
                                    {message.content}
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <form >
                                    <Button type="submit" variant="contained" color="secondary" onClick={() => updateMessage(message.id)}>წაშლა</Button>
                                </form>
                            </CardActions> */}
                        </Card>
                    )
                })
        }
            </div>
        );
    }else {
        return <Error />
    }
}
