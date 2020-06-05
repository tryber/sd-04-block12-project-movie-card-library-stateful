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

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClick = this.onClickAdd.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: !event.target.value });
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

  onClickAdd(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.onSearchTextChange(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.onBookmarkedChange(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.onSelectedGenreChange(event)}
        />
        <MovieList movies={this.filterMovies()} />
        <AddMovie onClick={(movie) => this.onClickAdd(movie)} />
      </div>
    );
  }
}
