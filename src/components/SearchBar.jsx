import React, { Component } from 'react';

class SearchBar extends Component {
  genres = {
    Todos: '',
    Ação: 'action',
    Comédia: 'comedy',
    Suspense: 'thriller',
  };

  generateOptions = (options) => {
    return Object.keys(options).map((option) => (
      <option key={options[option]} value={options[option]}>
        {option}
      </option>
    ));
  };

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <label>Inclui o texto</label>
        <input name="searchText" type="text" value={searchText} onChange={onSearchTextChange} />
        <label>Mostrar somente favoritos</label>
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label>Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          {this.generateOptions(this.genres)}
        </select>
      </form>
    );
  }
}

export default SearchBar;
