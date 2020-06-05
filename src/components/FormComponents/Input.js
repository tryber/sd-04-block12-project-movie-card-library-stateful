import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, id, value, handleChange, label } = this.props;
    return (
      <label>
        {label}
        <input type={type} name={id} value={value} onChange={handleChange} />
      </label>
    );
  }
}

export default Input;
