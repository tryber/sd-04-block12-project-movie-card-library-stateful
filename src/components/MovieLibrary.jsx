import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({ [name]: value });
    while (value !== '') {
      const searchMovies = movies.filter(
        ({ title, subtitle, storyline }) => title.includes(value)
          || subtitle.includes(value)
          || storyline.includes(value),
      );
      this.setState({ movies: searchMovies });
    }
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    const { name, checked } = event.target;
    this.setState({ [name]: !checked });
    if (checked) {
      const bookmarkedMovies = movies.filter(({ bookmarked }) => bookmarked);
      this.setState({ movies: bookmarkedMovies });
    } else {
      this.setState({ movies });
    }
  }

  onSelectedGenreChange(event) {
    const { name, select } = event.target;
    this.setState({ [name]: select });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.onSearchTextChange(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.onBookmarkedChange(event)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.onSearchTextChange(event)}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}
