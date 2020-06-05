import React, { Component } from 'react';
// import SearchBar from './SearchBar';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      onSearchTextChange: '',
      bookmarkedOnly: '',
      onBookmarkedChange: '',
      selectedGenre: '',
      onSelectedGenreChange: '',
    };
  }

  render() {
    return (
      <div>
        SearchBar
      </div>
    );
  }
}

export default SearchBar;
