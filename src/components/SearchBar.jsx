// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  // renderForm() Limite de 25 linhas agora é ignorado
  renderForm = () => {
    const {
    searchText, onSearchTextChange,
    bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
    } = this.props;
    return(
      <form>
        {/* Search Bar */}
        <label htmlFor="searchText">
          Inclui o texto
          <input
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        {/* Check box */}
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        {/* Select */}
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
  render() {
    return (
      this.renderForm()
    );
  }
}

export default SearchBar;
