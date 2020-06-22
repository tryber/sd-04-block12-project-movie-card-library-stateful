// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMoviesBookMarkedFavorits = this.filterMoviesBookMarkedFavorits.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  filterMoviesBookMarkedFavorits() {
    let moviesFilter = this.state.movies;
    if (this.state.bookmarkedOnly) {
      moviesFilter = moviesFilter.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      moviesFilter = moviesFilter.filter((movie) => movie.genre === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const regexFilter = new RegExp(this.state.searchText, 'i');
      moviesFilter = moviesFilter.filter((movie) => regexFilter.test(movie.title) ||
        regexFilter.test(movie.subtitle) ||
        regexFilter.test(movie.storyline));
    }
    return moviesFilter;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMoviesBookMarkedFavorits()} />
        <AddMovie />
      </div>
    );
  }
}
