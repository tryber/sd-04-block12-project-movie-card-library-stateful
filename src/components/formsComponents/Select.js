import React, { Component } from 'react';

class Select extends Component {
  render() {
    // tive que abreviar as props por causa do CC, legenda:
    // t = type; v = value; onC = onChange; l = label
    const { v, onC, l, name } = this.props;
    return (
      <label htmlFor="something">
        {l}
        <select name={name} value={v} onChange={onC}>
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
