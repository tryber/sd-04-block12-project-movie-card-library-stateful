import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.createMovie = this.createMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState(() => ({ searchText: event.target }));
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target });
  }

  onSelectedGenreChange(event) {
    this.setState(() => ({ selectedGenre: event.target }));
  }

  createMovie() {
    this.setState(() => ({movies: []}))
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre} onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        {/* <MovieList movies={this.state.movies} /> */}
        <AddMovie onClick={this.createMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
