/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleCheckedBook = this.handleCheckedBook.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleClick(element) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, element] });
  }

  handleCheckedBook(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleChangeText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleChangeText}
          onSelectedGenreChange={this.handleGenre}
          onBookmarkedChange={this.handleCheckedBook}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.handleClick} />
      </div>
    );
  }
}

export default MovieLibrary;
