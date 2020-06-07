// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
      } = this.props;
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto
          <input type="text" name="searchText" value={searchText} onChange={onSearchTextChange} placeholder="Procurar" />
        </label>
        <label htmlFor="bookmarkedOnly">
          <input type="checkbox" name="bookMarkedOnly" checked={bookmarkedOnly} onChange={onBookmarkedChange} /> Mostrar somente favoritos
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
