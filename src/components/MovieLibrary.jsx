// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
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
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedOnly = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }
  onBookmarkedChange() {
    this.setState((state) => ({ bookmarkedOnly: !state.bookmarkedOnly }));
  }
  onSelectedGenreChange(e) {
    this.setState({ selectedGenre: e.target.value });
  }
  // handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <p>
          <small>MovieLibrary Req: 16-20</small>
        </p>
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSearchTextChange={(e) => this.onSearchTextChange(e)}
          onBookmarkedChange={(e) => this.onBookmarkedChange(e)}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        {/* <MovieList /> */}
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
