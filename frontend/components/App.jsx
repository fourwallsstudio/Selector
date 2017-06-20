import React from 'react';
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import HeaderNavContainer from './header_nav/header_nav_container';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <HeaderNavContainer />
    <div className="head-filler"></div>


    <Route path="/login" component={ SessionFormContainer } />
    <Route path="/signup" component={ SessionFormContainer } />
  </div>
);

export default App;
