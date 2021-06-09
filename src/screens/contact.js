import React, {useEffect, useState, Fragment} from 'react'
import QuickLinks from './quicklinks';
import Covid from './covid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { firestore } from '../firebase/firebase.config';
import { useForm, Controller } from "react-hook-form";

function Contact() {
    const [messages] = useState([]);

    const addMessage = async () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        await firestore.collection("messages").add({
            name: name,
            email: email,
            title: title,
            content: content
        }).then(() => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
        })
    }
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
      } = useForm();
    return (
        <div className="">
            <div className="contact-background"></div>
            <div className="content">
                <br />
                <h1>კონტაქტი</h1>
                <br />
                <div className="contact">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.496185555404!2d44.795064269958246!3d41.69308717741696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cec02a4e4ff%3A0xa40152bf67fa2b5c!2sTbilisi&#39;s%20I.%20Vekua%20Public%20School%20%2342!5e1!3m2!1sen!2sus!4v1618424298427!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="send-message" style={{marginTop: "10px"}}>
                        <form noValidate onSubmit={handleSubmit(addMessage)}>
                                <TextField className="half" {...register("firstName", { required: true })} error={errors.firstName} helperText={errors.firstName && "სახელი აუცილებელია"} label="სახელი" id="name" variant="filled" style={{width: "100%"}} required />
                                <br />
                                <br />
                                <TextField className="half" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} error={errors.email} helperText={errors.email && "შეიყვანეთ ელ. ფოსტა რომელიც შეიცავს @"} label="ელექტრონული ფოსტა" id="email" variant="filled" style={{width: "100%"}} required />
                                <br />
                            <br />
                            <TextField label="სათაური" {...register("title", { required: true })} error={errors.title} helperText={errors.title && "სათაური აუცილებელია"} id="title" variant="filled" style={{width:"100%"}} required />
                            <br />
                            <br />
                            <TextField label="შეტყობინება" {...register("content", { required: true })} error={errors.content} helperText={errors.content && "შეტყობინების შინაარსი აუცილებელია"} multiline rows={5} variant="filled" id="content" style={{width:"100%"}} required />
                            <br />
                            <Button variant="outlined" color="primary" style={{marginTop: "10px"}}>
                                გაგზავნა
                            </Button>
                        </form>
                        <br/>
                        <br/>
                        <div className="info">
                            <p><b>ელექტრონული ფოსტა</b> - <a href="mailto: tbilisi42@mes.gov.ge" target="_blank">tbilisi42@mes.gov.ge</a></p>
                            <p><b>ნომერი</b> - <a href="tel:0322-99-82-10">(995) 0322 99 82 10</a></p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <QuickLinks />
            <br />
            <Covid />
        </div>
    )
}

export default Contact;