import React, { Component } from 'react';

class AddLabel extends Component {
  render() {
    const { htmlFor, text } = this.props;
    return (
      <label htmlFor={htmlFor}>{text}</label>
    );
  }
}

export default AddLabel;
