import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    // this.updtSt = this.updtSt.bind(this);
  };

  updtSt(e) {
    e.preventDefault();
    this.setState({ [ e.target.name ]: e.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={() => this.updtSt}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.updtSt}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={() => this.updtSt}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}

