import React from 'react';

function SearchBar(props) {
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
      <label htmlFor="searchText">
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          id="searchText"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
      <label htmlFor="bookmarked">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="bookmarked"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
      <label htmlFor="genre">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="genre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    </form>
  );
}

export default SearchBar;

