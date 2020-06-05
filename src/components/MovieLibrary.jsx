/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
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
      movies: props.movies,
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onAddMovie = this.onAddMovie.bind(this);
  }

  onChangeHandle({ target: { value, checked } }, name) {
    this.setState({ [name]: name === 'bookmarkedOnly' ? checked : value });
  }

  onAddMovie(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return movies.filter((mov) => {
      let result = true;
      if (bookmarkedOnly) result = result && mov.bookmarked;
      if (selectedGenre) {
        result = result && mov.genre === selectedGenre;
      }
      if (searchText) {
        result = result && (mov.title.includes(searchText)
          || mov.subtitle.includes(searchText)
          || mov.storyline.includes(searchText));
      }
      return result;
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="Library">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.onChangeHandle(e, 'searchText')}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) => this.onChangeHandle(e, 'bookmarkedOnly')}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.onChangeHandle(e, 'selectedGenre')}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={this.onAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
