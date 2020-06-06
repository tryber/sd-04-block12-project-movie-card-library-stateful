import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // configText(e) {
  //   this.setState({ });
  // }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const { movies } = this.props;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={movies} />
        <AddMovie onClick="" />
      </div>
    );
  }
}

export default MovieLibrary;
