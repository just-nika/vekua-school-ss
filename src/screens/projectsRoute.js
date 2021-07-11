import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import Projects from './projects';
import SingleProject from './SingleProject'

function ProjectsRoute() {
    return (
        <Switch>
            <Route exact path='/projects' component={Projects}/>
            <Route path='/projects/:id' component={SingleProject} />
        </Switch>
    )
}

export default ProjectsRoute
