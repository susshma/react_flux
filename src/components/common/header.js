"use strict";

var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <li><a href="/">Home</a></li>
      <li><a href="/#author">Authors</a></li>
      <li><a href="/#About">About</a></li>
    );
  }
});

module.exports = About;
