/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const [label, name, type, Tag, value, onChange] = this.props.data;
    return (
      <label htmlFor={name}>
        {label}
        <Tag
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Input;
