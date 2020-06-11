// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.st = this.st.bind(this);
    this.bm = this.bm.bind(this);
    this.sg = this.sg.bind(this);
  }

  st(e) {
    return this.setState({ searchText: e.target.value });
  }

  bm(e) {
    return this.setState({ bookmarkedOnly: !e.target.value });
  }

  sg(e) {
    return this.setState({ selectedGenre: e.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.st}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bm}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.sg}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
