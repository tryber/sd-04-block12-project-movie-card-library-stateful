import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: '',
    };   
  }
  
  render() {
    return (
        <div>
            <SearchBar />
            {/* <MovieList /> */}
            <AddMovie />
        </div>
    );
  }
}

export default MovieLibrary;
