// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.renderHalf = this.renderHalf.bind(this);
  }

  renderHalf() {
    return (
      <div>
        {' '}
        <label htmlFor="searchText">Inclui o texto: </label>
        <input
          name="searchText"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <br />
        <label htmlFor="bookmarkedOnly">Mostrar somente favoritos &nbsp;</label>
        <input
          name="bookmarkedOnly"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderHalf()}
          <label htmlFor="selectedGenre">Filtrar por gênero</label>
          <select
            name="selectedGenre"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
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

export default SearchBar;
