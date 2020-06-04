import React from 'react';

class FormField extends React.Component {
  render() {
    const { input, handleChange } = this.props;
    const { id, name, type, value, text } = input;
    return (
      <label htmlFor={id}>
        {text}
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default FormField;
