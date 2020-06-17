import React, { Component } from 'react';

class AddSel extends Component {
  render() {
    const { name, ...props } = this.props;
    return (
      <select name={name} {...props} />
    );
  }
}

export default AddSel;
