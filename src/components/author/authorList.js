"use strict";

var React = require('react');

var AuthorList = React.createClass({
  render: function () {

    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.firstName} {author.lastName}</a></td>
          <td>{author.id}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>Name</th>
            <th>ID</th>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = AuthorList;
