import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText = '',
      bookmarkedOnly = false,
      selectedGenre = '',
      movies = props.movies,
    }
  }

  atualizaTexto = () => {

  }

  atualizaBook = () => {

  }

  atualizaGenero = () => {

  }

  filteredMovies = () => {
    const {searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((movie) => 
    let result = true;
    if (bookmarkedOnly) result = result && movie.bookmarkedOnly; 
    )
  }

  addMovie = (newMovie) => {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
        searchText={this.state.searchText}
        onSearchTextChange={this.atualizaTexto}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.atualizaBook}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.atualizaGenero} />
        <MovieList movies={this.filteredMovies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
