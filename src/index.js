import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import configureStore from './configure-store';

import App from './components/app';
import Status from './components/status';
import About from './components/about';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/status" component={Status} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/status" />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
