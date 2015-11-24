"use strict";

var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <li><a href="/">Home</a></li>
        <li><a href="/#author">Authors</a></li>
        <li><a href="/#About">About</a></li>
      </div>
    );
  }
});

module.exports = Header;
