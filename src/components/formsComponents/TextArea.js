import React from 'react';

class Textarea extends React.Component {
  render() {
    const { type, value, checked, onChange, label, name } = this.props;
    return (
      <label htmlFor="something">
        {label}
        <textarea
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

export default Textarea;
