import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.textChange = this.textChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
  }

  textChange(e) {
    this.setState({ searchText: e.target.value });
  }

  checkChange() {
    if (this.state.bookmarkedOnly === false) {
      this.setState({ bookmarkedOnly: true });
    } else this.setState({ bookmarkedOnly: false });
  }

  selectChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    return (
      <SearchBar
        searchText={this.state.searchText}
        onSearchTextChange={this.textChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.checkChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.selectChange}
      />
    );
  }
}

export default MovieLibrary;
