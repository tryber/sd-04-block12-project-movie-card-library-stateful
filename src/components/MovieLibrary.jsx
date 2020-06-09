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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }
  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onBookmarkedChange() {
    this.setState((state) => ({ bookmarkedOnly: !state.bookmarkedOnly }));
  }
  onSelectedGenreChange(event) {
    this.setState({selectedGenre: event.target.value});
  }
  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar searchText={searchText} onSearchTextChange={(event) => this.onSearchTextChange(event)}
           bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
           selectedGenre={selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}/>
        <MovieList movies={data} />
        <AddMovie onClick={data} />
      </div>
    );
  }
}

export default MovieLibrary;
