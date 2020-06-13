import React, { Component } from 'react';
import FormInput from './components_forms/FormInput';
import FormLabel from './components_forms/FormLabel';
import FormSelc from './components_forms/FormSelc';
import FormOpt from './components_forms/FormOpt';

class SearchBar extends Component {
  createSearchBar() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div className="search-bar">
        <FormInput htmlFor="searchText" text="Inclui o texto" />
        <FormLabel
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
        <FormLabel
          name="bookmarkedOnly" type="checkbox"
          checked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <FormInput htmlFor="bookmarkedOnly" text="Mostrar somente favoritos" />
      </div>
    );
  }
  createFilter() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div className="genre-filter">
        <FormInput htmlFor="selectedGenre" text="Filtrar por gênero" />
        <FormSelc name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <FormOpt value="" text="Todos" />
          <FormOpt value="action" text="Ação" />
          <FormOpt value="comedy" text="Comédia" />
          <FormOpt value="thriller" text="Suspense" />
        </FormSelc>
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
