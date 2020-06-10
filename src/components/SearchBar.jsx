// implement SearchBar component here
import React, { Component } from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';
import AddSel from '../AddElements/AddSel';
import AddOpt from '../AddElements/AddOpt';


class SearchBar extends Component {
  createSearchBar() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="search-bar">
        <AddLabel htmlFor="searchText" text="Inclui o texto" />
        <AddInput
          name="searchText" type="text" value={searchText}
          onChange={onSearchTextChange} placeholder=" Procurar"
        />
      </div>
    );
  }
  createBookMarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div className="bookmarked">
        <AddInput
          name="bookmarkedOnly" type="checkbox"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <AddLabel htmlFor="bookmarkedOnly" text="Mostrar somente favoritos" />
      </div>
    );
  }
  createFilter() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className="genre-filter">
        <AddLabel htmlFor="selectedGenre" text="Filtrar por gênero" />
        <AddSel name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <AddOpt value="" text="Todos" />
          <AddOpt value="action" text="Ação" />
          <AddOpt value="comedy" text="Comédia" />
          <AddOpt value="thriller" text="Suspense" />
        </AddSel>
      </div>
    );
  }
  render() {
    return (
      <form className="SearchBar">
        {/* Search Bar */}
        {this.createSearchBar()}
        {/* Select */}
        {this.createBookMarked()}
        {/* Check box */}
        {this.createFilter()}
      </form>
    );
  }
}

export default SearchBar;
