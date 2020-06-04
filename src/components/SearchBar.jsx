// implement SearchBar component here
import React from 'react';

const SearchBar = ({
  searchText, onSearchTextChange, bookmarkedOnly,
  onBookmarkedChange, selectedGenre, onSelectedGenreChange,
}) => (
  <form>
    <label htmlFor="searchText"> Inclui o texto:
      <input name="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
    </label>
    <label htmlFor="fav">Mostrar somente favoritos
      <input
        name="fav"
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      />
    </label>
    <label htmlFor="genreFilter">Filtrar por gênero
      <select name="genreFilter" value={selectedGenre} onChange={onSelectedGenreChange}>
        <options value="">Todos</options>
        <options value="action">Ação</options>
        <options value="comedy">Comédia</options>
        <options value="thriller">Suspense</options>
      </select>
    </label>
  </form>
);

export default SearchBar;
