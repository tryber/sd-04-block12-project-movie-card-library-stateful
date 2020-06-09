import React, { Component, createElement } from 'react';

class LabelElement extends Component {
    render() {
      const { htmlFor, text } = this.props;
      return (
          <label htmlFor={htmlFor}>{text}</label>
      );
    }
  }

class InputElement extends Component {
  render() {
    const { ...props } = this.props;
    return (
          <input {...props} />
    );
  }
}
class ButtonElement extends Component {
  render() {
    const {type, text} = this.props;
    return(
      <button type={type}>{text}</button>
    );
  }
}

export default { LabelElement, InputElement, ButtonElement, };
