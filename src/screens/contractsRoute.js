import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, Redirect } from "react-router-dom";
import Contracts from './contracts';
import SingleContract from './SingleContract';

function ContractsRoute() {
    return (
        <Switch>
            <Route exact path='/contracts' component={Contracts}/>
            <Route path='/contracts/:id' component={SingleContract} />
        </Switch>
    )
}

export default ContractsRoute
