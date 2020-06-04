import React from 'react';
import SearchBar from './SearchBar';

import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // filterFilms (arr) {
  //   const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
  // }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={() => this.handleChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={() => this.handleChange}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}
