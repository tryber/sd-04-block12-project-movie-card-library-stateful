import React from 'react';

class Input extends React.Component {
  render() {
    const { type, value, checked, onChange, label, name } = this.props;
    return (
      <label htmlFor="something">
        {label}
        <input
          type={type}
          value={value}
          checked={checked}
          onChange={onChange}
          name={name}
        />
      </label>
    );
  }
}

export default Input;
