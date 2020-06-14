import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      newMovies: movies,
    };
    this.funTrocaGeral = this.funTrocaGeral.bind(this);
  }

  funSearchBarChange(event) {
    this.setState({ searchText: event.target.value });
  }

  funBookMarckChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  funGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }


  funLowerSplit(ti, subTi, story) {
    let resposta = [];
    let aux = '';
    let lower = '';

    aux = `${ti} ${subTi} ${story}`;
    lower = aux.toLowerCase();
    resposta = lower.split(' ');
    return resposta;
  }

  funTrocaGeral() {
    const novo = [];
    if (this.state.searchText) {
      this.state.movies.forEach((movie) => {
        let troca = [];
        const { title, subtitle, storyline } = movie;
        troca = this.funLowerSplit(title, subtitle, storyline);
        if (troca.includes(this.state.searchText.toLowerCase())) {
          novo.push(movie);
        }
      });
      return novo;
    } else if (this.state.bookmarkedOnly) {
      return this.state.movies.filter((movie) => {
        const { bookmarked } = movie;
        return this.state.bookmarkedOnly === bookmarked;
      });
    } else if (this.state.selectedGenre) {
      return this.state.movies.filter((movie) => {
        const { genre } = movie;
        return this.state.selectedGenre === genre;
      });
    }
    return this.state.movies;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.funSearchBarChange(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.funBookMarckChange(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.funGenreChange(event)}
        />
        <MovieList movies={this.funTrocaGeral()} />
        <AddMovie onClick="" />
      </div>
    );
  }
}
