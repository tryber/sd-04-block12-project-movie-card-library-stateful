// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="bookmarkedOnly">Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="selectedGenre">Filtrar por gênero
          <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
