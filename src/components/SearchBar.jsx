
import React from 'react';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="search">Inclui o texto:</label>
          <input
            type="text" name="search" id="search" value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
          />
          <input
            type="checkbox" name="bookmark" id="bookmark" checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
          <label htmlFor="bookmark">Mostrar somente favoritos</label>
          <label htmlFor="genre">Filtrar por gênero</label>
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}
            id="genre"
          >
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
