import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { name, value, label, handle, options } = this.props;
    return (
      <label>
        {label}
        <select name={name} value={value} onChange={(e) => handle(name, e)}>
          {Object.keys(options).map((option) => (
            <option key={options[option]} value={options[option]}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;
