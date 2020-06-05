// implement SearchBar component here
import React, { Component } from 'react';

class Name extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <label htmlFor="text">
          Inclui o texto:
          <input name="text" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="book">
          <input
            name="book" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select name="genre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
