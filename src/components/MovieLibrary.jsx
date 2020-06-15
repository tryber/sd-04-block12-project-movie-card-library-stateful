// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.addNewMovie = this.addNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let listMovies = this.props.movies;
    if (searchText.length > 0) {
      listMovies = listMovies.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      listMovies = listMovies.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre > 0) {
      listMovies = listMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return listMovies;
  }

  addNewMovie(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movie = this.filterMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          name="searchText"
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={movie} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
