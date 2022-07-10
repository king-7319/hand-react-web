import React, {lazy, Suspense} from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";

let Login = lazy(() => import('../Pages/Mine/login'))
let Home = lazy(() => import('../Pages/Home'))
let Register=lazy(()=>import('../Pages/Mine/register'))
let NotFound=lazy(()=>import('../Pages/NotFound'))



function Index() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>......加载中</div>}>
                    <Switch>
                        <Route path='/' component={Login} exact={true}/>
                        <Route path='/register' component={Register} exact={true}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/404' component={NotFound}/>
                        <Redirect path='*' to='/404' />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default Index;