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
      movies: this.props.movies,
    };
    this.handleText = this.handleText.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    //
    this.filterMovies = this.filterMovies.bind(this);
    //
    this.addNewMovie = this.addNewMovie.bind(this);
  }
  // Métodos - SearchBar

  handleText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleSelect(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  // - //

  // Método - MovieList

  filterMovies() {
    const { movies } = this.state;
    if (this.state.bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      const selectedGenre = this.state.selectedGenre;
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    if (this.state.searchText !== '') {
      const searchText = this.state.searchText;
      return movies.filter((movie) => (movie.title).includes(searchText)
      || (movie.subtitle).includes(searchText)
      || (movie.storyline).includes(searchText));
    }
    return movies;
  }

  // - //

  // Método - AddMovie

  addNewMovie(stateAddMovie) {
    // console.log(stateAddMovie);
    // const { movies } = this.state;
    // console.log(movies);
    this.setState((prevState) => ({ movies: [...prevState.movies, stateAddMovie] }));
  }

  // - //

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.handleText}
          onBookmarkedChange={this.handleBookmarked}
          onSelectedGenreChange={this.handleSelect}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
