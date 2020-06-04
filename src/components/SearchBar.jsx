import React, { Component } from 'react';

class SearchBar extends Component {
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
      <div>
        <form>
          <fieldset>
            <label htmlFor="inputLabel">
              Inclui o texto:
              <input type="text" value={searchText} onChange={onSearchTextChange} />
            </label>
            <label htmlFor="inputLabel">
              Mostrar somente favoritos:
              <input type="checkbox" value={bookmarkedOnly} onChange={onBookmarkedChange} />
            </label>
            <label htmlFor="inputLabel">
              Filtrar por gênero:
              <input type="text" value={selectedGenre} onChange={onSelectedGenreChange} />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}
