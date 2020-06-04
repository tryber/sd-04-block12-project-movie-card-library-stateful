// implement MovieLibrary component here
import React from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.changeMoviesState = this.changeMoviesState.bind(this);
  }


  componentDidUpdate(prevProps, prevState) {
    const { movies } = this.props;
    let newMovies = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (prevState.searchText !== searchText && searchText) {
      newMovies = movies.filter((movie) =>
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
      this.changeMoviesState(newMovies);
    }
    if (prevState.bookmarkedOnly !== bookmarkedOnly && bookmarkedOnly) {
      newMovies = movies.filter(
        (movie) => movie.bookmarked === bookmarkedOnly
      );
      this.changeMoviesState(newMovies);
    }
    if (prevState.selectedGenre !== selectedGenre && selectedGenre) {
      newMovies = movies.filter((movie) => movie.genre === selectedGenre);
      this.changeMoviesState(newMovies);
    }
  }

  onSearchTextChange(e) {
    const { movies } = this.props;
    const newSearchText = e.target.value;
    if (newSearchText) {
      this.setState((state) => ({
        ...state,
        searchText: newSearchText,
      }));
    } else {
      this.setState((state) => ({ ...state, movies, searchText: newSearchText }));
    }
  }

  onBookmarkedChange(e) {
    const { movies } = this.props;
    const newBookmarkedCheck = e.target.checked;
    if (newBookmarkedCheck) {
      this.setState((state) => ({
        ...state,
        bookmarkedOnly: newBookmarkedCheck,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        movies,
        bookmarkedOnly: newBookmarkedCheck,
      }));
    }
  }

  onSelectedGenreChange(e) {
    const { movies } = this.props;
    const newGenreValue = e.target.value;
    if (newGenreValue) {
      this.setState((state) => ({
        ...state,
        selectedGenre: newGenreValue,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        movies,
        selectedGenre: newGenreValue,
      }));
    }
  }

  changeMoviesState(newValue) {
    this.setState((state) => ({ ...state, movies: newValue }));
  }

  addMovie(stateAddMovie) {
    const { movies } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = stateAddMovie;
    const newMovie = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    this.setState((state) => ({ ...state, movies: [...movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movies} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
