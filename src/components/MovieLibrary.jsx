import React, { Component } from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    // inicializo stado das variaveis que sofrerão alteração
    this.state = {
      // objeto de ações
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    // uso bind quando tenho alteração no meu state / controlador
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this); // func sem usar
    this.FilterMoviesBookMarkedFavorits = this.FilterMoviesBookMarkedFavorits.bind(this);
  }
  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value }); // recebe o novo value
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly }); // nega o que vem
  }

  onSelectedGenreChange(event) {
    const { value } = event.target; // pega valor do campo
    this.setState({ selectedGenre: value }); // selectedGenre vale o que o usuário seleciona
  }

  FilterMoviesBookMarkedFavorits() {
    let moviesFilter = this.state.movies;
    if (this.state.bookmarkedOnly) {
      moviesFilter = moviesFilter.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      moviesFilter = moviesFilter.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const regexFilter = new RegExp(this.state.searchText, 'i');
      moviesFilter = moviesFilter.filter((movie) => regexFilter.test(movie.title) ||
        regexFilter.test(movie.subtitle) ||
        regexFilter.test(movie.storyline));
    }
    return moviesFilter;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.FilterMoviesBookMarkedFavorits()} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
