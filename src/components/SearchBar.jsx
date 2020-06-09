// implement SearchBar component here
import React, { Component } from 'react';
import CreateElement from './CreateElement';

class SearchBar extends Component {
  render() {
    const {
    searchText, onSearchTextChange,
    bookmarkedOnly, onBookmarkedChange,
    selectedGenre, onSelectedGenreChange,
  } = this.props;
    return (
      <form>
        {/* Search Bar */}
        <CreateElement.LabelElement htmlFor="searchText" text="Inclui o texto" />
        <CreateElement.InputElement name="searchText" type="text" value={searchText} onChange={onSearchTextChange} placeholder="Procurar" />
        {/* Check box */}
        <CreateElement.InputElement name="bookmarkedOnly" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
        <CreateElement.LabelElement htmlFor="bookmarkedOnly" text="Mostrar somente favoritos" />
        {/* Select */}
        <CreateElement.LabelElement htmlFor="selectedGenre"text="Filtrar por gênero" />
        <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          </select>
      </form>
    );
  }
}

export default SearchBar;
