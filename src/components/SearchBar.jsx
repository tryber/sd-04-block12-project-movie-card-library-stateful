import React, { Component } from 'react';

export default class extends Component {

  const { 
    onSearchTextChange,
    bookmarkedOnly, 
    onBookmarkedChange, 
    selectedGenre, 
    onSelectedGenreChange 
  } = this.props;

  render() {
    return (
      <form>
      
        <label htmlFor="searchText">
          Inclui o texto:
          <input name="searchText" value={searchText} type="text" onChange={onSearchTextChange} />
        </label>
        <label htmlFor="onlyFavorites">
          Mostrar somente favoritos
          <input name="onlyFavorites" type="checkbox" checked={bookmrkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genreFilter">
         <select name="genreFilter" value={selectedGenre}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
         </select>
        </label>

      </form>
    )

  };
};
