import React, { Component } from 'react';

export default class SearchBar extends Component {
  funSearch() {
    const { searchText, onSearchTextChange  } = this.props;
    return (
      <label htmlFor="searchText">
        Inclui o texto:
        <input type="text" value={searchText} onChange={onSearchTextChange} />
      </label>
    );
  }

  funMarked() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookMarked">
        Mostrar somente favoritos
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
      </label>
    );
  }

  funSelect() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selected">
        Filtrar por gênero
        <select value={selectedGenre} onChange={onSelectedGenreChange} >
          <option value="">Todos</option>
          <option value="action" >Ação</option>
          <option value="comedy" >Comédia</option>
          <option value="thriller" >Suspense</option>
        </select>
      </label>
    );
  }
  
  render() {
    return (
      <div>
        <form>
          {this.funSearch()}
          {this.funMarked()}
          {this.funSelect()}
        </form>

      </div>
    );
  }
}
