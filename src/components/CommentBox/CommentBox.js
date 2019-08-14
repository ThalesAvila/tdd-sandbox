import React from "react";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // TODO - Call an action creator
    // Add save comment
    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          cols="30"
          rows="10"
          onChange={this.handleChange}
          value={this.state.comment}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
