import React, { Component } from 'react';

class AddInput extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <input {...props} />
    );
  }
}

export default AddInput;
