// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  textIncluded() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="input">
          Inclui o texto:
          <input type="text" name="input" value={searchText} onChange={onSearchTextChange} />
        </label>
      </div>
    );
  }
  favoriteOnly() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="fav">
        <input
          type="checkbox"
          id="fav"
          checked={bookmarkedOnly}
          value={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        Mostrar somente favoritos
      </label>
    );
  }
  genreFilter() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genreFilter">
        Filtrar por gênero
        <select name="genreFilter" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div>
        <small>SearchBar: Req: 1-5</small>
        <br />
        <form>
          {this.textIncluded()}
          <br />
          {this.favoriteOnly()}
          <br />
          {this.genreFilter()}
          <br />
        </form>
        <hr />
      </div>
    );
  }
}

export default SearchBar;
