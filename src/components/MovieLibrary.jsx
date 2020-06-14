import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }
  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
  }
  onBookmarkedChange(e) {
    const value = e.target.checked;
    this.setState({ bookmarkedOnly: value });
  }
  onSelectedGenreChange(e) {
    const value = e.target.value;
    console.log(`Props = ${this.props}`);
    console.log(this.state);
    this.setState({ selectedGenre: value });
  }
  filteredMovies() {
    let selectedMovies = this.state.movies;
    if (this.state.bookmarkedOnly !== false) {
      selectedMovies = selectedMovies.filter((movie) => movie.bookmarked === true);
    }
    if (this.state.selectedGenre !== '') {
      selectedMovies = selectedMovies.filter((movie) => movie.gender === this.state.selectedGenre);
    }
    if (this.state.searchText !== '') {
      const searchText = new RegExp(this.state.searchText, 'i');
      selectedMovies = selectedMovies.filter((movie) => searchText.test(movie.title));
    }
    return selectedMovies;
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
