// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { 
      searchText, onSearchTextChange, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange, bookmarkedOnly,
    } = this.props;
    return (
      <form>
        <label id='inputOne'>**"Inclui o texto:"**</label>
        <input type='text' id='inputOne' value={searchText} onChange={onSearchTextChange} />
        <label id='inputTwo'>**"Mostrar somente favoritos"**</label>
        <input id='inputTwo' type='checkbox' checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label id='inputThree'>**"Filtrar por gênero"**</label>
        <select id='inputThree' value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value=''>Todos</option>
          <option value='action'>Ação</option>
          <option value='comedy'>Comédia</option>
          <option value='thriller'>Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
