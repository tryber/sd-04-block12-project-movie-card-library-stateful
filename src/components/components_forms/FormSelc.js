import React, { Component } from 'react';

class FormSelec extends Component {
  render() {
    const { name, ...props } = this.props;
    return (
      <select name={name} {...props} />
    );
  }
}

export default FormSelec;
