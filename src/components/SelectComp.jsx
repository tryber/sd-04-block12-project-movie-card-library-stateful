import React, { Component } from 'react';

class SelectComp extends Component {
  render() {
    const { name, onChange, defValue } = this.props;
    return (
      <select name={name} onChange={onChange}>
        <option defaultValue={defValue}>Todos</option>
        <option value="action">Acao</option>
        <option value="comedy">Comedia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }
}

export default SelectComp;
