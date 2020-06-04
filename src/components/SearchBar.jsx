// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input
            name="searchText"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="favorites">
          Mostrar somente favoritos
          <input
            name="favorites"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label htmlFor="genreFilter">
          Filtrar por gênero
          <select
            name="genreFilter"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <options value="">Todos</options>
            <options value="action">Ação</options>
            <options value="comedy">Comédia</options>
            <options value="thriller">Suspense</options>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
