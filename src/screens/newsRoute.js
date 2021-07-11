import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import News from './news';
import SinglePost from './SinglePost'

function NewsRoute() {
    return (
        <Switch>
            <Route exact path='/news' component={News}/>
            <Route path='/news/:id' component={SinglePost} />
        </Switch>
    )
}

export default NewsRoute
