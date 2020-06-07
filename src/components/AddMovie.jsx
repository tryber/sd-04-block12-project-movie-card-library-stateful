// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <form>
        <label htmlFor="Título">
          Título
          <input type="text" value={title} onChange={onClick} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
