// implement MovieLibrary component here
import React from 'react';
// import MovieList from './MovieList';
// import movies from './../data';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
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
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }
  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }
  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    return (
    <SearchBar 
      searchText={this.state.searchText}
      onSearchTextChange={(event) => this.onSearchTextChange(event)} 
      bookmarkedOnly={this.state.bookmarkedOnly}
      onBookmarkedChange={(event) => this.onBookmarkedChange(event)} 
      selectedGenre={this.state.selectedGenre}
      onSelectedGenreChange={(event) => this.onSelectedGenreChange(event)}     
    />
    );
  }
}

export default MovieLibrary;