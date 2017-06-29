import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { makeShow } from './actions/show_actions';
import configureStore from './store/store';
import { searchUsers } from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  window.makeShow = store.makeShow;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.searchUsers = store.searchUsers;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});


// window.addEventListener("beforeunload", (ev) => {
//   ev.preventDefault();
//   return ev.returnValue = 'Are you sure you want to close?';
// });
