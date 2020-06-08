// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="search">Inclui o texto:</label>
        <input id="search"
               type="text"
               value={this.props.searchText}
               onChange={this.props.onSearchTextChange}
        />
      </form>
    );
  }
}

export default SearchBar;
