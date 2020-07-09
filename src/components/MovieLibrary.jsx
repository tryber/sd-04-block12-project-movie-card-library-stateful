import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies: propMovies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: propMovies,
    };
  }

  onClick = ({ title, subtitle, storyline, rating, imagePath, genre }) => {
    const { movies } = this.state;
    const newMovie = {
      genre,
      imagePath,
      rating,
      storyline,
      subtitle,
      title,
    };
    this.setState({ movies: [...movies, newMovie] });
  };

  setSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  setBookmarkedOnly = (event) => {
    this.setState({ bookmarkedOnly: event.target.checked });
  };

  setGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  };

  movieFilter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let movieList = movies;
    if (searchText) {
      movieList = movieList.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText),
      );
    }
    if (bookmarkedOnly) {
      movieList = movieList.filter(
        (movie) => movie.bookmarked === bookmarkedOnly,
      );
    }
    if (selectedGenre) {
      movieList = movieList.filter((movie) => movie.genre === selectedGenre);
    }
    return movieList;
  };

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <React.Fragment>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.setSearchText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.setBookmarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.setGenreChange}
        />
        <MovieList movies={this.movieFilter()} />
        <AddMovie onClick={this.onClick} />
      </React.Fragment>
    );
  }
}

export default MovieLibrary;
