import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { value, onChange, label, name } = this.props;
    return (
      <label htmlFor="something">
        {label}
        <select name={name} value={value} onChange={onChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
