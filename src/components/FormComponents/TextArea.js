import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { name, value, label, handle } = this.props;
    return (
      <label>
        {label}
        <textarea name={name} value={value} onChange={(e) => handle(name, e)} />
      </label>
    );
  }
}

export default TextArea;
