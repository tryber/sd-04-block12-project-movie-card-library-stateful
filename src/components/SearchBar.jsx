import React from 'react';

export default ({
  searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
  onSelectedGenreChange,
}) => (
  <form>
    <label htmlFor="searchText">
      Inclui o texto:
      <input name="searchText" value={searchText} type="text" onChange={onSearchTextChange} />
    </label>
    <label htmlFor="onlyFavorites">
      Mostrar somente favoritos
      <input name="onlyFavorites" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
    </label>
    <label htmlFor="genreFilter">
      Filtrar por gênero
      <select name="genreFilter" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  </form>
);
