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
    if (value !== '') {
      const searchMovies = movies.filter(
        ({ title, subtitle, storyline }) =>
          title.includes(value) || subtitle.includes(value) || storyline.includes(value),
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
    const { name, value } = event.target;
    const { movies } = this.props;
    this.setState({ [name]: value });
    if (value === '') {
      this.setState({ movies });
    } else {
      const genreMovies = movies.filter(({ genre }) => genre === value);
      this.setState({ movies: genreMovies });
    }
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
          onSelectedGenreChange={(event) => this.onSelectedGenreChange(event)}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}
