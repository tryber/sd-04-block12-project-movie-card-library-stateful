import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

function textFunction({ title, subtitle, storyline }, searchText) {
  if (title.includes(searchText) || subtitle.includes(searchText)
  || storyline.includes(searchText)) {
    return true;
  }
  return false;
}

function genreFunction({ genre }, selectedGenre) {
  if (genre === selectedGenre) return true;
  return false;
}

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterFunction() {
    const { movies, bookmarkedOnly, searchText, selectedGenre } = this.state;
    return movies.filter((element) => {
      if (bookmarkedOnly) {
        if (element.bookmarked) return true;
        return false;
      }
      if (selectedGenre !== '') return genreFunction(element, selectedGenre);
      return textFunction(element, searchText);
    });
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.onBookmarkedChange}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterFunction()} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
