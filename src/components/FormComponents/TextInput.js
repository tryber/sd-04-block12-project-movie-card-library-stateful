import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { name, value, label, onChange } = this.props;
    return (
      <label>
        {label}
        <input type="text" name={name} value={value} onChange={(e) => onChange(name, e)} />
      </label>
    );
  }
}

export default TextInput;
