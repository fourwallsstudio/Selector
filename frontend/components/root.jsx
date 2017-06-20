import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
};

export default Root;
