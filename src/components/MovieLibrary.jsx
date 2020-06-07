// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.handleText = this.handleText.bind(this);
    this.handleBookmarked = this.handleBookmarked.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  // Métodos - SearchBar

  handleText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleBookmarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleSelect(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  // - //

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.handleText}
          onBookmarkedChange={this.handleBookmarked}
          onSelectedGenreChange={this.handleSelect}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
