import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
      filteredMovies: movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange(e) {
    const { name, value, checked } = e.target;
    const valueToChange = name === 'bookmarkedOnly' ? checked : value;
    this.setState(state => ({ [name]: valueToChange }));
    console.log(this.state);
    this.moviesFilter();
  }

  moviesFilter() {
    this.setState(state => {
      const { searchText, bookmarkedOnly, selectedGenre, movies } = state;
      let filteredMovies = [...movies];
      if (bookmarkedOnly) {
        filteredMovies = filteredMovies.filter(
          movie => movie.bookmarked === true,
        );
      }
      if (selectedGenre) {
        filteredMovies = filteredMovies.filter(
          movie => movie.genre === selectedGenre,
        );
      }
      if (searchText) {
        filteredMovies = filteredMovies.filter(
          movie =>
            movie.title.includes(searchText) ||
            movie.subtitle.includes(searchText) ||
            movie.storyline.includes(searchText),
        );
      }

      return { filteredMovies };
    });
  }

  handleAddMovie(addState) {
    this.setState(state => ({ movies: [...state.movies, addState] }));
    this.moviesFilter();
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      filteredMovies,
    } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleChange}
          onBookmarkedChange={this.handleChange}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.handleAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
