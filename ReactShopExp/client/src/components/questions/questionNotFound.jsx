"use strict";
var React = require("react");
var DocumentTitle = require("local/components/core/documentTitle.jsx");

var Question = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="404: Question not found">
        <div>
            <span>Question not found :(</span>
        </div>
      </DocumentTitle>
    );
  }
});
module.exports = Question;
