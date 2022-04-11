import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import Deleted from './deleted';
import { auth, firestore, firebase } from '../firebase/firebase.config'
import SingleDeletedPost from './singleDeletedPost'
import Error from './error';

var user = firebase.auth().currentUser;
function DeletedRoute() {
    if (user) {  
        return (
            <Switch>
                <Route exact path='/deleted' component={Deleted}/>
                <Route path='/deleted/:id' component={SingleDeletedPost} />
            </Switch>
        )
    }else if (user == null) {
        return <><Error/></>
    }
}

export default DeletedRoute
