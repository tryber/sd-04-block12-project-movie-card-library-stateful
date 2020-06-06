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
  }

  componentDidUpdate(prevProps, prevState) {
    const { movies } = this.props;
    let changedData = movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    if (searchText !== prevState.searchText && searchText) {
      changedData = changedData.filter(
        (movie) =>
          movie.title.includes(searchText) ||
          movie.subtitle.includes(searchText) ||
          movie.storyline.includes(searchText)
      );
      this.updateMethod(changedData);
    }
    if (bookmarkedOnly !== prevState.bookmarkedOnly && bookmarkedOnly) {
      changedData = changedData.filter(
        (movie) => movie.bookmarked === bookmarkedOnly
      );
      this.updateMethod(changedData);
    }
    if (prevState.selectedGenre !== selectedGenre && selectedGenre) {
      changedData = changedData.filter(
        (movie) => movie.genre === selectedGenre
      );
      this.updateMethod(changedData);
    }
  }

  updateMethod(array) {
    this.setState({ movies: array });
  }

  textChange(e) {
    const { movies } = this.props;
    const eventValue = e.target.value;
    if (eventValue) {
      this.setState((state) => ({
        ...state,
        searchText: eventValue,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        movies,
        searchText: eventValue,
      }));
    }
  }

  checkChange(e) {
    const { movies } = this.props;
    const eventValue = e.target.checked;
    if (eventValue) {
      this.setState((state) => ({
        ...state,
        bookmarkedOnly: eventValue,
      }));
    } else {
      this.setState((state) => ({
        ...state,
        movies,
        bookmarkedOnly: eventValue,
      }));
    }
  }

  selectChange(e) {
    const eventValue = e.target.value;
    // if (this.state.selectedGenre === '') this.setState({ movies: e.target.value })
    this.setState((state) => ({
      ...state,
      bookmarkedOnly: eventValue,
    }));
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
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MovieLibrary;
