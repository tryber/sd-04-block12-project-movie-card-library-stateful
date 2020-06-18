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
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.setMovies = this.setMovies(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onSearchTextChange(event) {
    this.setState(() => ({ searchText: event.target.value }));
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState(() => ({ selectedGenre: event.target.value }));
  }

  setMovies(item) {
    this.setState({ movies: [...this.state.movies, item] });
  }

  filterMovies() {
    const { bookmarkedOnly, movies, searchText, selectedGenre } = this.state;
    let movieArray = [...movies];
    if (bookmarkedOnly) {
      movieArray = movieArray.filter((item) => item.bookmarked === true);
    } else if (selectedGenre) {
      movieArray = movieArray.filter((item) => item.genre === selectedGenre);
    } else if (searchText) {
      movieArray = movieArray.filter((item) =>
        item.title.includes(searchText) ||
        item.subtitle.includes(searchText) ||
        item.storyline.includes(searchText)
        );
    }
    return movieArray;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre} onSearchTextChange={this.onSearchTextChange}
          onBookmarkedChange={this.onBookmarkedChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.setMovies} />
      </div>
    );
  }
}

export default MovieLibrary;
