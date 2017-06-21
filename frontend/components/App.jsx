import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import HeaderNavContainer from './header_nav/header_nav_container';
import SessionFormContainer from './session/session_form_container';
import UserWelcomeContainer from './user_welcome/user_welcome_container';
import UserProfileContainer from './user_profile/user_profile_container';

const App = () =>  {

  return (
    <div>
      <HeaderNavContainer />
      <div className="head-filler"></div>

      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <ProtectedRoute exact path='/home' component={ UserWelcomeContainer } />
      <Route exact path="/user/:userId" component={ UserProfileContainer } />
    </div>
  )
};

export default App;

// <Route exact path="/:showId" component={ ShowViewContainer } />
