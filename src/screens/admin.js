import React, {Fragment, useEffect, useState} from 'react';
import { firebase, auth, firestore } from '../firebase/firebase.config';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Editor } from '@tinymce/tinymce-react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  

function Admin() {
    // handleEditorChange = (e) => {
    //     console.log(
    //       'Content was updated:',
    //       e.target.getContent()
    //     );
    //   }
    const classes = useStyles();
    // const [editorState, setEditorState] = React.useState(
    //     () => EditorState.createEmpty(),
    //   );
    const [posts, setposts] = useState([]);
    useEffect(() => {
    }, [])
    const addPosts = async () => {
        const title = document.getElementById("title").value;
        const url = document.getElementById("photo").value;
        const content = document.getElementById("content").value;
        // ამატებს ახალ დოკუმენტს ავტომატურად დაგენერირებული ID-ით
        await firestore.collection("posts").add({
            title: title,
            url: url,
            content: content
        }).then(() => {
            document.getElementById("title").value = "";
            document.getElementById("photo").value = "";
            document.getElementById("content").value = "";
        })
    }
    
    return (
        <Router>
            <div className="admin-news">
                <div className="post-form">
                    <form action="" className="add-post">
                        <br />
                        <br />
                        <h2 style={{textAlign: "center"}}>პოსტის დამატება</h2>
                        <br />
                        <br />
                        <TextField id="title" label="სათაური" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <TextField id="photo" label="ფოტოს ლინკი" variant="filled" style={{width: "100%"}}/>
                        <br />
                        <br />
                        <Editor
                            // initialValue="<p>Initial content</p>"
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image', 
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic | \
                                alignleft aligncenter alignright | \
                                bullist numlist outdent indent | help'
                            }}
                            id="content"
                        />
                        {/* <TextField
                            label="პოსტი"
                            multiline
                            rows={5}
                            variant="filled"
                            style={{width: "100%"}}
                            id="content"
                        /> */}
                        <Button variant="contained" color="primary" onClick={() => addPosts()} style={{textAlign: "center"}}>პოსტის დამატება</Button>
                    </form>
                </div>
                <br />
                <br />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card >
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                Heading
                                </Typography>
                                {/* <Typography>
                                This is a media card. You can use this section to describe the content.
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    View
                                </Button>
                                <Button size="small" color="primary">
                                    Edit
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Switch>
                    <Route path="/single">
                        <SinglePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
    function SinglePage() {
        return "კი";
    }
}

export default Admin
