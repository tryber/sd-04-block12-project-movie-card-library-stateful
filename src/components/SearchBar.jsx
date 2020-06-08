// implement SearchBar component here
import React from 'react';
import InputText from './formComponents/InputText';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <form>
      <InputText v={searchText} oC={onSearchTextChange} />
      <label htmlFor="Favs">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          name="Favs"
          checked={bookmarkedOnly}
          placeholder="Insert your search"
          onChange={onBookmarkedChange}
        />
      </label>
      <label htmlFor="Genre">
        Filtrar por gênero:
        <select
          type="select"
          name="Genre"
          value={selectedGenre}
          placeholder="Insert your search"
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;
