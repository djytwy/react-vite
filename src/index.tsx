import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'mobx-react';
import App from './pages/AppPage/App';
import Hoc1 from './pages/testHoc1';
import NotFound from './pages/notFound';
import LearnHoc from './pages/learnHoc';
import LearnCustHooks from './pages/learnCustHooks';
import LearnMobx from './pages/learnMobx';
import EletricRoom from './pages/eletricRoom';
// mobx
import { user } from './store/user';
import { eletricRoomState } from './store/eletricRoom';

export default function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/app">
                    <App />
                </Route>
                <Route path="/hoc1" >
                    <Hoc1 />
                </Route>
                <Route path="/learnHoc1">
                    <LearnHoc />
                </Route>
                <Route path="/customHook">
                    <LearnCustHooks />
                </Route>
                <Route path="/eletricRoom">
                    <Provider {...eletricRoomState}>
                        <EletricRoom />
                    </Provider>
                </Route>
                <Route path="/learnMobx">
                    <Provider {...user}>
                        <LearnMobx name='twy' age={18} />
                    </Provider>
                </Route>
                <Route path="/*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}