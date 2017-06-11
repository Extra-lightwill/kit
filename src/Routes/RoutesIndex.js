import React from 'react';
import Relay from 'react-relay'

import { Link, Route, Switch } from 'react-router-dom';

import { Home, PageOne, PageTwo } from '../Pages/index';
import { NotFound, Redirect } from './NotFound';
import WhenNotFound from './WhenNotFound';

//top level routes go here

const RoutesIndex = () => (
  <Switch>
    <Route exact path='/' component={Home} />
        
        <Route path='/page-one' component={PageOne} />
        <Route path='/page-two' component={PageTwo} />
        
        <Redirect from="/old/path" to="/new/path" />
        <Route component={WhenNotFound} />
  </Switch>
)

export default RoutesIndex;