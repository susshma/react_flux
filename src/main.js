$ = jQuery = require('jQuery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var Home = require('./components/homePage');
var About = require('./components/about/about');
var Authors = require('./components/author/authorPage');

Router.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});
