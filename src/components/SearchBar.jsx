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
        <label htmlFor="check">Mostrar somente favoritos</label>
        <input
          id="check"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </form>
    );
  }
}

export default SearchBar;
