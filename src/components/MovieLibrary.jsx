import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.textChange = this.textChange.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.filterMethod = this.filterMethod.bind(this);
  }

  filterMethod() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let changedData = movies;
    if (searchText) {
      changedData = changedData.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText)
      );
    }
    if (bookmarkedOnly) {
      changedData = changedData.filter(
        (movie) => movie.bookmarked === bookmarkedOnly
      );
    }
    if (selectedGenre) {
      changedData = changedData.filter(
        (movie) => movie.genre === selectedGenre
      );
    }
    return changedData;
  }

  textChange(e) {
    this.setState({ searchText: e.target.value });
  }

  checkChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  selectChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  render() {
    return (
      <>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.textChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.checkChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.selectChange}
        />
        <MovieList movies={this.filterMethod()} />
      </>
    );
  }
}

export default MovieLibrary;
