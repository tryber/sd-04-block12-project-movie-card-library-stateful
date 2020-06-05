import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.addMovie = this.addMovie.bind(this);
    this.bookmarkedChanged = this.bookmarkedChanged.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  bookmarkedChanged() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  checkBookmarked(movie) {
    const { bookmarkedOnly } = this.state;
    return !bookmarkedOnly || (bookmarkedOnly && movie.bookmarked === true) ? movie : false;
  }

  checkGenre(movie) {
    const { selectedGenre } = this.state;
    return ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) ? movie : false;
  }

  filterMovie(movies) {
    const { searchText } = this.state;
    return movies.filter(
      (movie) => (movie.title.includes(searchText) || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText)) && this.checkBookmarked(movie)
      && this.checkGenre(movie),
    );
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          onBookmarkedChange={this.bookmarkedChanged}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.filterMovie(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}