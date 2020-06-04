import React from 'react';

class SearchSelectField extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre">
        Filtrar por Gênero
        <select
          name="selectedGenre"
          id="genre"
          value={genre}
          onChange={handleChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SearchSelectField;
