import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
require('newrelic');

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser.id },
    users: { [window.currentUser.id]: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;

  } else {
    store = configureStore()
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
