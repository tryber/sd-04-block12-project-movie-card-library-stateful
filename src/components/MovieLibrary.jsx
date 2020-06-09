import React, { Component } from 'react';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    // inicializo stado das variaveis que sofrerão alteração
    this.state = {
      // objeto de ações
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies: this.props.movies,
    };
    // uso bind quando tenho alteração no meu state / controlador
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this); // func sem usar
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value }); // recebe o novo value
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly }); // nega o que vem
  }

  onSelectedGenreChange(event) {
    const { value } = event.target; // pegar valor do campo
    this.setState({ selectedGenre: value }); // selectedGenre vale oque usuario seleciona
  }

  render() {
    return (
      <div>
        <SearchBar state={this.state} />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;