// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.AddMovieOnList = this.AddMovieOnList.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let movieArr = this.props.movies;
    if (searchText.length > 0) {
      movieArr = movieArr.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      movieArr = movieArr.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre.length > 0) {
      movieArr = movieArr.filter((movie) => movie.genre === selectedGenre);
    }
    return movieArr;
  }

  AddMovieOnList(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movie = this.filteredMovies();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={movie} />
        <AddMovie onClick={this.AddMovieOnList} />
      </div>
    );
  }
}

export default MovieLibrary;
