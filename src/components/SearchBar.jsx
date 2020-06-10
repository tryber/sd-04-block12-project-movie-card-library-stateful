import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="includeText">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="favorite">
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          Mostrar somente favoritos
        </label>
        <label htmlFor="genFiltro">
          Filtrar por gênero
          <select id="genFiltro" value={selectedGenre} onChange={onSelectedGenreChange}>
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
