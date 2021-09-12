import React, { useState } from 'react'
import QuickLinks from './quicklinks';
import Covid from './covid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { firestore, firebase } from '../firebase/firebase.config';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import swal from "sweetalert";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';


function Contact(toggleDark) {
    const [messages, setMessages] = React.useState([]);
    const [count, countMessages] = React.useState([]);
    const [countAll, countAllMessages] = React.useState([]);
    React.useEffect(() => {
        getMessages();
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(2),
          },
        },
        margin: {
            margin: theme.spacing(1),
          },
      }));
      
      const defaultProps = {
        color: 'secondary',
        children: <MailIcon />,
      };
    var user = firebase.auth().currentUser;
    function Status() {
        if (user) {
            return <>
                <IconButton aria-label="delete" className={classes.margin} href="/messages">
                    <Badge badgeContent={count} max={99} {...defaultProps} />
                </IconButton>
                <br />
            </>
        }else {
            return ""
        }
    }
    firestore.collection(`active-messages`).where("name", "!=", "").get().then( async function (querySnapshot) { const messagesCount = querySnapshot.size; countMessages(messagesCount)});
    firestore.collection(`messages`).get().then( async function (querySnapshot) { const allMessagesCount = querySnapshot.size; countAllMessages(allMessagesCount)});
    const addMessage = async (data) => {
        await firestore.collection("messages").add({
            name: data.firstName,
            email: data.email,
            mobileNumber: data.mobile,
            title: data.title,
            content: data.content,
            code: countAll,
            status: "active",
        }).then(() => {
            firestore.collection("active-messages").add({
                name: data.firstName,
                email: data.email,
                mobileNumber: data.mobile,
                title: data.title,
                content: data.content,
                code: countAll,
                status: "active",
            }).then(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("mobile-number").value = "";
                document.getElementById("title").value = "";
                document.getElementById("content").value = "";
                swal(
                    "შეტყობინება წარმატებით გაიგზავნა!",
                    "",
                    "success"
                );
            })
        })
    }
    const classes = useStyles();

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const getMessages = async () => {
        const data = await firestore.collection("active-messages").where("name", "!=", "").get();
        console.log(data);
        setMessages(data.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        })))
        console.log(data);
    }
    return (
        <div className="">
            <Helmet>
                  <title>კონტაქტი</title>
                </Helmet>
            {/* <div className="contact-background"></div> */}
            <div className="content">
                <br />
                <h1>კონტაქტი</h1>
                <br />
                <Status/>
                <div className="contact">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.7397193867932!2d44.794248716898544!3d41.69327600549267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cec02a4e4ff%3A0xa40152bf67fa2b5c!2z4YOY4YOa4YOY4YOQIOGDleGDlOGDmeGDo-GDkOGDoSDhg6Hhg5Dhg64uIOKEljQyIOGDoeGDkOGDr-GDkOGDoOGDnSDhg6Hhg5nhg53hg5rhg5A!5e1!3m2!1ska!2sge!4v1631458317983!5m2!1ska!2sge" title="map" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="send-message" style={{marginTop: "10px"}}>
                        <form noValidate onSubmit={handleSubmit(addMessage)}>
                            <TextField {...register("firstName", { required: true })} error={errors.firstName} helperText={errors.firstName && "სახელი აუცილებელია"} label="სახელი" id="name" variant="filled" style={{width: "100%"}} required />
                            <br /> 
                            <br />
                            <TextField {...register("email", { required: true, pattern: /^\S+@\S+$/i })} error={errors.email} helperText={errors.email && "შეიყვანეთ ელ. ფოსტა რომელიც შეიცავს @"} label="ელექტრონული ფოსტა" id="email" variant="filled" style={{width: "100%"}} required />
                            <br />
                            <br />
                            <TextField {...register("mobile", { required: true, minLength: 9 })} type="number" error={errors.mobile} helperText={errors.email && "შეიყვანეთ სწორი ტელეფონის ნომერი"} label="ტელეფონის ნომერი" id="mobile-number" variant="filled" style={{width: "100%"}} required />
                            <br />
                            <br />
                            <TextField label="სათაური" {...register("title", { required: true })} error={errors.title} helperText={errors.title && "სათაური აუცილებელია"} id="title" variant="filled" style={{width:"100%"}} required />
                            <br />
                            <br />
                            <TextField label="შეტყობინება" {...register("content", { required: true })} error={errors.content} helperText={errors.content && "შეტყობინების შინაარსი აუცილებელია"} multiline rows={5} variant="filled" id="content" style={{width:"100%"}} required />
                            <br />
                            <Button variant="contained" color="primary" type="submit" fullWidth style={{marginTop: "10px"}}>
                                გაგზავნა
                            </Button>
                        </form>
                        <br/>
                        <br/>
                        <div className="info">
                            <p><b>ნომერი</b> - <a href="tel:0322-99-00-73">(995) 032 2 99 00 73</a></p>
                            <p><b>ელექტრონული ფოსტა</b> - <a href="mailto: tbilisi42@mes.gov.ge" rel="noreferrer" target="_blank">tbilisi42@mes.gov.ge</a></p>
                            <p style={{textAlign: "start"}}><b>საიტის Admin</b> - <a href="mailto: support@vekua42.edu.ge" rel="noreferrer" target="_blank">support@vekua42.edu.ge</a></p>
                            <p style={{textAlign: "start"}}><b>სკოლის IT</b> - <a href="mailto: it@vekua42.edu.ge" rel="noreferrer" target="_blank">it@vekua42.edu.ge</a></p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <QuickLinks />
            <br />
            <Covid toggleDark={toggleDark}/>
        </div>
    )
}

export default Contact;