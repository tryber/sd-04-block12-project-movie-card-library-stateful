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
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  </form>
);

export default SearchBar;
