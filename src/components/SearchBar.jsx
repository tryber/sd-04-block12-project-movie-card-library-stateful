// implement SearchBar component here
import React, { Component } from 'react';
// import PropTypes from "prop-types";

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, 
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="text-enclude">
        Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="favorite">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genrer">
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

export default SearchBar;
