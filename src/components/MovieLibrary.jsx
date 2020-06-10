// implement MovieLibrary component here
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
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedOnly.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange() {
    this.setState((this.searchText: 'true'));
  }
  onBookmarkedOnly() {
    this.setState((this.bookmarkedOnly: true));
  }
  onSelectedGenreChange() {
    this.setState((this.selectedGenre: 'true'));
  }
  // handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    // const { movies } = this.props;
    return (
      <div>
        <p>
          <small>MovieLibrary Req: 16-20</small>
        </p>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={this.props.onSearchTextChange}
          onBookmarkedOnly={this.props.onBookmarkedOnly}
          onSelectedGenreChange={this.props.onSelectedGenreChange}
        />
        {/* <MovieList /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
