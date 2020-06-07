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
        <label>Inclui o texto
          <input type="text" name="searchText" value={searchText} onChange={onSearchTextChange}
            placeholder="Procurar" />
        </label>
        <label>
          <input type="checkbox" name="bookMarkedOnly" checked={bookmarkedOnly}
            onChange={onBookmarkedChange} /> Mostrar somente favoritos
        </label>
        <label>Filtrar por gênero
          <select name="select" value={selectedGenre} onChange={onSelectedGenreChange}>
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
