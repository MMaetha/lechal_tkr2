import React, { Component } from 'react'
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'

import App from './App/App'
import Home from './Home/home'

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={Home} />
  </Route>
)