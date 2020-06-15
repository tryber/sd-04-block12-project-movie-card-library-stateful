// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="search">Inclui o texto:</label>
          <input
            type="text" name="search" id="search" value={this.props.searchText}
            onChange={onSearchTextChange}
          />
          <input
            type="checkbox" name="bookmark" id="bookmark" checked={this.props.bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="bookmark">Mostrar somente favoritos</label>
          <label htmlFor="genre">Filtrar por gênero</label>
          <select value={this.props.selectedGenre} onChange={onSelectedGenreChange} id="genre">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}
