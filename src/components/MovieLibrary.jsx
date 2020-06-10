import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }
  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value });
    this.filterMovies();
  }
  onBookmarkedChange(e) {
    const value = e.target.checked;
    this.setState({ bookmarkedOnly: value });
    this.filterMovies();
  }
  onSelectedGenreChange(e) {
    const value = e.target.value;
    console.log(`Props = ${this.props}`);
    console.log(this.state);
    this.setState({ selectedGenre: value });
    this.filterMovies();
  }
  filterMovies() {
    let filter = null;
    if (this.state.searchText !== '') filter = this.state.searchText;
    if (this.state.bookmarkedOnly !== false) filter = this.state.searchText;
    if (this.state.selectedGenre !== '') filter = this.state.searchText;
    const fMovies = this.props.movies.filter(({ title, genre, bookmarked }) => {
      return ([title, genre, bookmarked].includes(filter));
    });
    console.log(fMovies);
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.state.movies} />
        <AddMovie />
      </div>
    );
  }
}
