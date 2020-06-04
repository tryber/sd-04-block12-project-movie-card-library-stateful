
import React from 'react';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <div>
          <span>Inclui o texto:</span>
          <input
            type="text" name="search" value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
          />
        </div>
        <div>
          <input
            type="checkbox" name="bookmark" checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
          <span>Mostrar somente favoritos</span>
        </div>
        <div>
          <span>Filtrar por gênero</span>
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="commedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </div>
    );
  }
}
