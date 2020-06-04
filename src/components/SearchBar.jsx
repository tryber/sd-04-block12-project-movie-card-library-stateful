import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState(
      {
        search: event.target.value
      }
    );
  }

  onBookmarkedChange() {
    this.setState(
      {
    //   bookMarkedOnly: event.taget.value
      }
    );
  }

  render() {
    return (
      <section>
          <div>
            <label htmlFor="search-bar">Inclui o texto:</label>
            <input type="text" name="search-bar" value={this.state.searchText} onChange={this.onSearchTextChange} ></input>
          </div>
          <div>
            <input type="checkbox" name="checkbox" checked={this.state.bookMarkedOnly} onChange={this.onBookmarkedChange} />
            <label htmlFor="checkbox">Mostrar somente favoritos</label>
          </div>
      </section>
    );
  }
}

export default SearchBar;