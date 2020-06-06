import React, { Component } from 'react';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <SearchBar searchText={searchText} />
      </div>
    );
  }
}

export default MovieLibrary;
