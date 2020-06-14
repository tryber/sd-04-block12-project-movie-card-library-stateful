import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const m = [
  {
    title: 'An awesome title',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/Ghost_In_The_Shell_2_0.jpg',
    bookmarked: true,
    genre: 'action',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'An incredible subtitle',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    bookmarked: false,
    genre: 'comedy',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'An great storyline',
    rating: 3,
    imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
    bookmarked: false,
    genre: 'thriller',
  },
];

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


  funLowerSplit (ti, subTi, story) {
    let resposta = [];
    let aux = '';
    let lower = '';

    aux = `${ti} ${subTi} ${story}`;
    lower = aux.toLowerCase();
    resposta = lower.split(' ');
    return resposta;
  }

  funTrocaGeral() {
    let novo = [];
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
