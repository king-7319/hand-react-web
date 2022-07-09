import React, {lazy, Suspense} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

let Login = lazy(() => import('../Pages/Mine/login'))
let Home = lazy(() => import('../Pages/Home'))



function Index() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>......加载中</div>}>
                    <Switch>
                        <Route path='/' component={Login} exact={true}/>
                        <Route path='/home' component={Home}/>

                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

export default Index;