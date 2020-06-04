
import React from 'react';

export default class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <span>Inclui o texto:</span>
        <input type="text" name="search" value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </div>
    );
  }
}
