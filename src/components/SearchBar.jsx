// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, onBookmarkedChange, selectedGenre, onSelectedGenreChange, bookmarkedOnly } = this.props;
    return (
      <form>
        <label htmlFor="search">
          Inclui o texto:
          <input type="text" name="search" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input type="checkbox" name="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} name="genre" onChange={onSelectedGenreChange}>
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

export default SearchBar;
