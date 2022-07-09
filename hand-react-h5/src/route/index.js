import React from 'react';
// import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"

// let Login = lazy(() => import('../Pages/Mine/login'))
// let Home = lazy(() => import('../Pages/Home'))
import Login from "../Pages/Mine/login"
import Home from "../Pages/Home/index"


function Index() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' component={Login} exact={true}/>
                    <Route path='/home' component={Home}/>

                </Switch>
            </Router>
        </div>
    );
}

export default Index;