/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, name, type, label, Tag, onChange } = this.props;
    return (
      <label htmlFor={name}>
        {label}
        <Tag
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e, name)}
        />
      </label>
    );
  }
}

export default Input;
