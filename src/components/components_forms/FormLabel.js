import React from 'react';

class FormLabel extends React.Component {
  render() {
    const { htmlFor, text } = this.props;
    return (
      <label htmlFor={htmlFor} text={text} />
    );
  }
}

export default FormLabel;
