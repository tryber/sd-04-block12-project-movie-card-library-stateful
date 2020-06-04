import React, { Component } from 'react';

class inputs extends Component {
  render() {
    const { name, value, onChange, type } = this.props;
    return (
      <div>
        <label htmlFor={name}>Título
          <input type={type} name={name} value={value} onChange={onChange} />
        </label>
      </div>
    );
  }
}

export default inputs;