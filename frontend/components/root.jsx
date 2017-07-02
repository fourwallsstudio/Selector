import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App store={ store } />
      </HashRouter>
    </Provider>
  )
};

export default Root;
