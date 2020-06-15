
import React, { Component } from 'react';

class SearchBar extends Component {
  renderSearch() {
    return (
      <label htmlFor="entrada">
        Inclui o texto:
        <input
          type="text"
          name="entrada"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  render() {
    return (

      <form>
        {this.renderSearch()}
        <br />
        <label htmlFor="check">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="check"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor="selection"> Filtrar por gênero </label>
        <select name="selection" 
          value={this.props.selectedGenre} 
          onChange={this.props.onSelectedGenreChange}>
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
