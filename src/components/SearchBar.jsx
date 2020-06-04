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
        <label htmlFor="inputOne">
          Inclui o texto:
          <input type="text" name="inputOne" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="inputTwo">
          Mostrar somente favoritos
          <input type="checkbox" name="inputTwo" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="inputThree">
          Filtrar por gênero
          <select value={selectedGenre} name="inputThree" onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
