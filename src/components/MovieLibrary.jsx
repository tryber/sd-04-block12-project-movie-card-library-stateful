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
    }
    this.updatesBook = this.updatesBook.bind(this);
    this.updatesTextGender = this.updatesTextGender.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updatesTextGender(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  updatesBook(event) {
    this.setState({ bookmarkedOnly: !event.target.value })
  }

  filteredMovies() {
  const {searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
  let filterMovies = movies.filter(
    ({ title, subtitle, storyline }) => {
      (title.includes(searchText) || subtitle.includes(searchText) || storyline.includes(searchText))
    });
    if (selectedGenre !== '') {
    return filterMovies = filterMovies.filter(({ genre }) => genre === selectedGenre);
    } else if (bookmarkedOnly) {
      return filterMovies.filter(({ bookmarked }) => bookmarked);
    } else {
      return filterMovies;
    }
  }

  addMovie(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        searchText={this.state.searchText}
        onSearchTextChange={this.updatesTextGender}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.updatesBook}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.updatesTextGender} />
        <MovieList movies={this.filteredMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
