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
    this.addMovie = this.addMovie.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.upDate(event);
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.upDate(event);
  }

  upDate(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }
  
  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  filteredMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let arrFiltered = movies;

    if (bookmarkedOnly) {
      arrFiltered = arrFiltered.filter((movie) => movie.bookmarked === true);
    }

    if (selectedGenre) {
      arrFiltered = arrFiltered.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      arrFiltered = arrFiltered.filter(
        (movie) =>
          movie.title === searchText ||
          movie.subtitle === searchText ||
          movie.storyline.includes(searchText),
      );
    }
    return arrFiltered;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies(movies)} />
        <AddMovie onCLick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
