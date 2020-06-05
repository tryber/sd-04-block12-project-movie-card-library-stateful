// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function filterText(movie, searchText) {
  if (movie.title.includes(searchText)
  || movie.subtitle.includes(searchText)
  || movie.storyline.includes(searchText)) return true;
  return false;
}

function filterGenre(movie, selectedGenre) {
  if (movie.genre === selectedGenre) return true;
  return false;
}

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
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    this.setState((state) => ({ bookmarkedOnly: !state.bookmarkedOnly }));
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies.filter((movie) => {
      if (bookmarkedOnly) {
        if (movie.bookmarked) return true;
        return false;
      }
      if (selectedGenre !== '') {
        return filterGenre(movie, selectedGenre);
      }
      return filterText(movie, searchText);
    });
  }

  addMovie(obj) {
    this.setState((state) => ({ movies: [...state.movies, obj] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.onSearchTextChange(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.onSelectedGenreChange(event)}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={(e) => this.addMovie(e)} />
      </div>
    );
  }
}

export default MovieLibrary;
