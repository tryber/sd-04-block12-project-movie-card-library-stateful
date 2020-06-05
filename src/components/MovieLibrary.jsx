import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
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
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange="Callback vai aqui"
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange="Callback vai aqui"
          selectedGenre={selectedGenre}
          onSelectedGenreChange="Callback vai aqui"
        />
        <MovieList movies={movies} />
        <AddMovie onClick="" />
      </div>
    );
  }
}

export default MovieLibrary;
