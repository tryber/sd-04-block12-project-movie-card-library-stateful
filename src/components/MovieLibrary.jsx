// implement MovieLibrary component here
import React from 'react';
import Searchbar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: '',
    };
  }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <Searchbar
          searchText={this.state.searchText}
          onSearchTextChange={(event) =>
            this.setState({ searchText: event.target.value })
          }
          onBookmarkedChange=""
          bookmarkedOnly=""
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange=""
        />
        <MovieList movies={movies} />
        <AddMovie />
      </div>
    );
  }
}
