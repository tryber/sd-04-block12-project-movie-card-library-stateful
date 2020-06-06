import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { text, type, name, value, func } = this.props;
    return (
      <div>
        <label htmlFor={name}>{text}</label>
        <input type={type} name={name} value={value} onChange={func} />
      </div>
    );
  }
}

export default Label;
