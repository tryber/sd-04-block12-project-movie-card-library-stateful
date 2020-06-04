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
  }

  onSearchTextChange(e) {
    const { movies } = this.props;
    const newSearchText = e.target.value;
    if (newSearchText) {
      const newMovies = movies.filter(
        movie =>
          movie.title.includes(newSearchText) ||
          movie.subtitle.includes(newSearchText) ||
          movie.storyline.includes(newSearchText),
      );
      this.setState(state => ({
        ...state,
        movies: newMovies,
        searchText: newSearchText,
      }));
    } else {
      this.setState(state => ({ ...state, movies, searchText: newSearchText }));
    }
  }

  onBookmarkedChange(e) {
    const { movies } = this.props;
    const newBookmarkedCheck = e.target.checked;
    if (newBookmarkedCheck) {
      const newMovies = movies.filter(
        movie => movie.bookmarked === newBookmarkedCheck,
      );
      this.setState(state => ({
        ...state,
        movies: newMovies,
        bookmarkedOnly: newBookmarkedCheck,
      }));
    } else {
      this.setState(state => ({
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
      const newMovies = movies.filter(movie => movie.genre === newGenreValue);
      this.setState(state => ({
        ...state,
        movies: newMovies,
        selectedGenre: newGenreValue,
      }));
    } else {
      this.setState(state => ({
        ...state,
        movies,
        selectedGenre: newGenreValue,
      }));
    }
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
    this.setState(state => ({ ...state, movies: [...movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
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
      </>
    );
  }
}

export default MovieLibrary;
