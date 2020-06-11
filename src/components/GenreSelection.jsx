import React, { Component } from "react";

class GenreSelection extends Component {
  render() {
    const { id, label, value, onChange, items } = this.props;
    return (
      <label htmlFor={id}>
        {label}
        <select id={id} value={value} onChange={onChange}>
          {items}
        </select>
      </label>
    );
  }
}

export default GenreSelection;
