// implement SearchBar component here
import React, { Component } from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';
import AddSel from '../AddElements/AddSel';
import AddOpt from '../AddElements/AddOpt';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form className="SearchBar">
        {/* Search Bar */}
        <div>
          <AddLabel htmlFor="searchText" text="Inclui o texto" />
          <AddInput
            name="searchText" type="text" value={searchText}
            onChange={onSearchTextChange} placeholder="Procurar"
          />
        </div>
        {/* Check box */}
        <div>
          <AddInput
            name="bookmarkedOnly" type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
          <AddLabel htmlFor="bookmarkedOnly" text="Mostrar somente favoritos" />
        </div>
        {/* Select */}
        <div>
          <AddLabel htmlFor="selectedGenre" text="Filtrar por gênero" />
          <AddSel name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
            <AddOpt value="" text="Todos" />
            <AddOpt value="action" text="Ação" />
            <AddOpt value="comedy" text="Comédia" />
            <AddOpt value="thriller" text="Suspense" />
          </AddSel>
        </div>
      </form>
    );
  }
}

export default SearchBar;
