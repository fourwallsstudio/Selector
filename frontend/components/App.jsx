import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import HeaderNavContainer from './header_nav/header_nav_container';
import SessionFormContainer from './session/session_form_container';
import UserWelcomeContainer from './user_welcome/user_welcome_container';
import UserProfileContainer from './user_profile/user_profile_container';
import ShowProfileContainer from './show_profile/show_profile_container';
import UploadFormContainer from './upload/upload_form_container';

const App = () =>  {

  return (
    <div>
      <HeaderNavContainer />
      <div className="head-filler"></div>

      <AuthRoute path="/login" component={ SessionFormContainer } />
      <AuthRoute path="/signup" component={ SessionFormContainer } />
      <Route exact path="/user/:userId" component={ UserProfileContainer } />
      <Route exact path="/show/:showId" component={ ShowProfileContainer } />
      <ProtectedRoute exact path='/home' component={ UserWelcomeContainer } />
      <Route exact path='/upload' component={ UploadFormContainer } />
    </div>
  )
};

export default App;
