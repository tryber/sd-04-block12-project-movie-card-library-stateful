import React, { Component } from 'react';

class SearchBar extends Component {
  includedText() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="inputText">
        Inclui o texto:
        <input type="text" value={searchText} onChange={onSearchTextChange} />
      </label>
    );
  }

  showOnlyFavorites() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <label htmlFor="inputFavorites">
        Mostrar somente favoritos:
        <input type="checkbox" value={bookmarkedOnly} onChange={onBookmarkedChange} />
      </label>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          {this.showOnlyFavorites()}
          {this.includedText()}
          <label htmlFor="inputGenre">
            Filtrar por gênero:
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
