 
import React, { Component } from 'react';

class FormOpt extends Component {
  render() {
    const { value, text } = this.props;
    return (
      <option value={value}>{text}</option>
    );
  }
}

export default FormOpt