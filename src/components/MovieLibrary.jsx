import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState(() => ({ searchText: event.target.value }));
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState(() => ({ selectedGenre: event.target.value }));
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
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
