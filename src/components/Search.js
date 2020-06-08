import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Inclui o texto:</label>
        <input
          id="search"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </div>
    );
  }
}

export default Search;