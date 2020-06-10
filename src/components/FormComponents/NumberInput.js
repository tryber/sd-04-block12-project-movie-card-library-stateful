import React, { Component } from 'react';

class NumberInput extends Component {
  render() {
    const { name, value, label, handle } = this.props;
    return (
      <label>
        {label}
        <input type="number" name={name} value={value} onChange={(e) => handle(name, e)} />
      </label>
    );
  }
}

export default NumberInput;
