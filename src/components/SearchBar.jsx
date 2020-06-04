// implement SearchBar component here
import React from 'react';

const SearchBar = (props) => {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form>
      <label htmlFor="search-bar-input">
        Inclui o texto:
        <input
          id="search-bar-input"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
      <label htmlFor="search-bar-checkbox">
        Mostrar somente favoritos
        <input
          id="search-bar-checkbox"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
      <label htmlFor="search-bar-select">
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
};

export default SearchBar;
