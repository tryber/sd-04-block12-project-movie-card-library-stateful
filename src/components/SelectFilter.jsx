import React, { Component } from 'react';

class SelectFilter extends Component {
  render() {
    const { name, onChange, selected, value } = this.props;
    return (
      <select name={name} value={value} onChange={onChange}>
        <option defaultValue={selected} value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    );
  }
}

export default SelectFilter;
