// implement MovieLibrary component here
import React from 'react';

import data from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={searchText} bookmarkedOnly={bookmarkedOnly} selectedGenre={selectedGenre} onSearchTextChange={(event) => this.onSearchTextChange(event)} />
        <MovieList movies={data} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
