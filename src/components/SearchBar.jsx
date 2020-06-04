import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText:'',
    };
  }

  onSearchTextChange = event => {
      this.setState({
          search: event.target.value
      });
  }

  render() {
    return (
        <div>
            <label for="search-bar">Inclui o texto:</label>
            <input type="text" name="search-bar" value={this.state.searchText} onChange={this.onSearchTextChange} ></input>
        </div>
    );
  }
}

export default SearchBar;