"use strict";

var React = require('react');
var Router = require('react-router')

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" paht="/" handler={require('./app')}>
    <DefaultRoute name="homepage" handler={require('./components/homePage')} />
    <Route name="authors" path="/#authors" handler={require('./components/author/authorPage')} />
  </Route>
)

module.exports = routes;
