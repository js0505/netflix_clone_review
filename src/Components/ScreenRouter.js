import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';

const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/search'} exact component={Search}/>
                <Route path={'/tv'} exact component={TV}/>
            </Switch>
            </>
        </Router>
    );
};

export default ScreenRouter;