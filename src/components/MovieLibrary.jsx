// implement MovieLibrary component here
import React from 'react';
import './MovieLibrary.css'
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

function filterSearchText(movie, searchText) {
  return movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText);
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
      if (bookmarkedOnly) return movie.bookmarked;
      if (selectedGenre !== '') return movie.genre === selectedGenre;
      return filterSearchText(movie, searchText);
    });
  }
  addNewMovie(e) {
    this.setState((state) => ({ movies: [...state.movies, e] }));
  }
  renderSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="lib-opt">
        <h3>Pesquisa</h3>
        <SearchBar
          className="SearchBar"
          searchText={searchText} onSearchTextChange={(event) => this.onSearchTextChange(event)}
          bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
        />
      </div>
    );
  }
  renderAddMovie() {
    return (
      <div className="lib-opt">
        <h3>Add Movie</h3>
        <AddMovie onClick={(e) => this.addNewMovie(e)} />
      </div>
    );
  }
  render() {
    return (
      <div className="Movie-Library">
        <div className="library-options notShowed">
          {this.renderSearchBar()}
          {this.renderAddMovie()}
        </div>
        <MovieList movies={this.filterMovies()} />
      </div>
    );
  }
}

export default MovieLibrary;
