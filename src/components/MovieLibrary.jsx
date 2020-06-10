import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  funSearchBarChange(event) {
    this.setState({ searchText: event.target.value });
  }

  funBookMarckChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  funGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.funSearchBarChange(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.funBookMarckChange(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.funGenreChange(event)}
        />
        <MovieList movies={this.state.movies}/>
        <AddMovie onClick="" />
      </div>
    );
  }
}
