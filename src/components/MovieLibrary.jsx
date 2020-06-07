// implement MovieLibrary component here
import React from 'react';
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
      movies:this.props.movies,
    };
  }

  updateSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  updateBookMarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked })
  }

  updateSelected(event) {
    this.setState({ selectedGenre: event.target.value })
  }

  render() {
    console.log(this)
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.updateSearch.bind(this)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.updateBookMarket.bind(this)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.updateSelected.bind(this)}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
