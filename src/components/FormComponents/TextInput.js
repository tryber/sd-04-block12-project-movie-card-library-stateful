import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { name, value, label, handle } = this.props;
    return (
      <label>
        {label}
        <input type="text" name={name} value={value} onChange={(e) => handle(name, e)} />
      </label>
    );
  }
}

export default TextInput;
