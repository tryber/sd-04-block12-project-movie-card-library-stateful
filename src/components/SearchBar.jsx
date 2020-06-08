// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label>Inclui o texto:
          <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
        </label>
      </form>
    );
  }
}

export default SearchBar;
