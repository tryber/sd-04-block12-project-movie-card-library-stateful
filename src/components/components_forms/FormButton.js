import React from 'react';

class FormButton extends React.Component {
  render () {
    const { type, text } = this.props;
    return (
      <button type={type} text={text} />
    );
  }
}

export default FormButton;