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

    this.updateSearch = this.updateSearch.bind(this);
    this.updateBookMarket = this.updateBookMarked.bind(this);
    this.updateSelected = this.updateSelected.bind(this);

  }

  updateSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  updateBookMarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  updateSelected(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    // console.log(this);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.updateSearch}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.updateBookMarket}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.updateSelected}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
