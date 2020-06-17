import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    const { type, text } = this.props;
    return (
      <button type={type}>{text}</button>
    );
  }
}

export default AddButton;
