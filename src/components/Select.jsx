// implement SearchBar component here
import React from 'react';

class Select extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select">
        Filtrar por gênero
        <select name="select" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option selected value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default Select;
