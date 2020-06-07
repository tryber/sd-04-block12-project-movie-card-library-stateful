import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filteredMovies() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filterMovies = movies.filter(({ title, subtitle, storyline }) => {
      const titleIncludes = title.includes(searchText);
      const subtitleIncludes = subtitle.includes(searchText);
      const storylineIncludes = storyline.includes(searchText);
      return titleIncludes || subtitleIncludes || storylineIncludes;
    });
    if (selectedGenre) {
      filterMovies = filterMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return bookmarkedOnly ? filterMovies.filter(({ bookmarked }) => bookmarked) : filterMovies;
  }

  addMovie(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => {
            this.setState({ searchText: event.target.value });
          }}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => {
            this.setState({ bookmarkedOnly: !bookmarkedOnly });
          }}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => {
            this.setState({ selectedGenre: event.target.value });
          }}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
