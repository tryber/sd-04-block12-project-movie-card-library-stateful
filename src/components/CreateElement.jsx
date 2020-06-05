import React from 'react';

class CreateElement extends React.Component {
  render() {
    const { name, type, text, value, callback } = this.props;
    if (type === 'textarea') {
      return (
        <label htmlFor={name}>
          {text}
          <textarea name={name} value={value} onChange={(event) => callback(event)} />
        </label>
      );
    }

    return (
      <label htmlFor={name}>
        {text}
        <input type={type} name={name} value={value} onChange={(event) => callback(event)} />
      </label>
    );
  }
}

export default CreateElement;
