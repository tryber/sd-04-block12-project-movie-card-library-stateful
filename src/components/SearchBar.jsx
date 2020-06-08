// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="search">Inclui o texto:</label>
        <input
          id="search"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <label htmlFor="check-fav">Mostrar somente favoritos</label>
        <input
          id="check-fav"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <label htmlFor="gen">Filtrar por gênero</label>
        <select
          id="gen"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
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
