import React, {Fragment, useEffect} from 'react';
import { firebase, auth } from '../firebase/firebase.config';
import { Redirect } from "react-router-dom";
function News() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            return "მგონი გამოვიდა";
        } else {
          return "არაა"
        }
      });
    return (
        <div className="">

        </div>
    )
}

export default News
