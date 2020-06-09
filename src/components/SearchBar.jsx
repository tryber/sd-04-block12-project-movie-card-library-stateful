// implement SearchBar component here
import React, { Component } from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';

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
        <AddLabel htmlFor="searchText" text="Inclui o texto" />
        <AddInput name="searchText" type="text" value={searchText} onChange={onSearchTextChange} placeholder="Procurar" />
        {/* Check box */}
        <AddInput name="bookmarkedOnly" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <AddLabel htmlFor="bookmarkedOnly" text="Mostrar somente favoritos" />
        {/* Select */}
        <AddLabel htmlFor="selectedGenre"text="Filtrar por gênero" />
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
