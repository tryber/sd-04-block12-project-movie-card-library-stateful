import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

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

  updateSearchText = (event) => {
    const { value } = event.target;

    this.setState({
      searchText: value,
    });
  };

  updateBookmarked = (event) => {
    const { checked } = event.target;
    this.setState({
      bookmarkedOnly: checked,
    });
  };

  updateSelectedGenre = (event) => {
    const { value } = event.target;
    this.setState({
      selectedGenre: value,
    });
  };

  filterMovies = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filteredMovies = movies;

    if (searchText) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText)
      );
    }

    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }

    return filteredMovies;
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.updateSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.updateBookmarked}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.updateSelectedGenre}
        />
        <MovieList movies={this.filterMovies()} />
      </div>
    );
  }
}

export default MovieLibrary;
