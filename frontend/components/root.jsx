import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from '../util/scroll_to_top_util.jsx';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <ScrollToTop>
          <App store={ store } />
        </ScrollToTop>
      </HashRouter>
    </Provider>
  )
};

export default Root;
