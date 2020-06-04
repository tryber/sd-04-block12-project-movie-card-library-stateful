
import React from 'react';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <span>Inclui o texto:</span>
        <input
          type="text" name="search" value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <br />
        <input
          type="checkbox" name="bookmark" checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
        <span>Mostrar somente favoritos</span>
      </div>
    );
  }
}
