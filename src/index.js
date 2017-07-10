import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App/App'
const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
