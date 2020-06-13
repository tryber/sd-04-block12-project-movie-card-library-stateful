import React from 'react';

class FormInput extends React.Component {
  render() {
    const { ...props } = this.props
    return (
      <input {...props} />
    );
  }
}

export default FormInput;
