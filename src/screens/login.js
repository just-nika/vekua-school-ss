import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    auth,
    firestore
} from '../firebase/firebase.config';
import { useHistory } from 'react-router';

function Login() {
    const history = useHistory();
    const userPassAuth = () => {
        console.log("user method")
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        auth.signInWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            history.push("/");
        })
    }
    firestore.collection("posts").get().then(function(querySnapshot) {      
        console.log(querySnapshot.size); 
    });
    return (
    <div className="login-container">
        <div className="login">
            <form className="" autoComplete="off">
                <h2>Admin Panel-ზე შესვლა</h2>
                <br />
                <TextField label="ელ. ფოსტა" type="email" className="login-input" id="email" required />
                <br />
                <TextField label="პაროლი" type="password" className="login-input" id="password" required />
                <br/>
                <Button variant="contained" color="primary" onClick={userPassAuth}>შესვლა</Button>
            </form>
        </div>
    </div>
  );
}

export default Login;