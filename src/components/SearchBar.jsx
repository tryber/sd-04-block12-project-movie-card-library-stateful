
import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <label>Inclui o texto:</label>
          <input type="text" name="search" value={this.props.searchText}
            onChange={this.props.onSearchTextChange} />
      </div>
    );
  }
}
