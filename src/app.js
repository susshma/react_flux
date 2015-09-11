var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div class="container-fluid">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = App;
