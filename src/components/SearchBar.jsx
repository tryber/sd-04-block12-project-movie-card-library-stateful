// implement SearchBar component here
import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { seartchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        <label>
          Inclui o texto:
          <input type="text" value={seartchText} onChange={onSearchTextChange} />
        </label>
        <label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos
        </label>
        <label>
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Name;
