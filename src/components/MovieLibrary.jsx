import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.updtSt = this.updtSt.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  updtSt(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  renderMovieList() {
    const { selectedGenre, bookmarkedOnly, movies, searchText } = this.state;
    let filteredMovies = movies.filter((movie) => (movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText)));
    if (selectedGenre) {
      filteredMovies = filteredMovies
        .filter((movie) => movie.genre === selectedGenre);
    }
    return bookmarkedOnly ? filteredMovies.filter((movie) => movie.bookmarked) : filteredMovies;
  }

  renderMovie({
    subtitle = '',
    title = '',
    imagePath = '',
    storyline = '',
    rating = 0,
    genre = '',
  }) {
    return this.setState((state) => ({
      movies: [...state.movies, {
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked: false,
        genre,
      }],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.updtSt}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.updtSt}
        />
        <MovieList
          movies={this.renderMovieList()}
        />
        <AddMovie onClick={this.renderMovie} />
      </div>
    );
  }
}
