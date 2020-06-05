// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.AddMovieOnList = this.AddMovieOnList.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);

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

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let newMovieArr = this.props.movies;
    if (searchText.length > 0) {
      newMovieArr = newMovieArr.filter((film) => (film.title.includes(searchText)) ||
      (film.subtitle.includes(searchText)) ||
      (film.storyline.includes(searchText)));
    }
    if (bookmarkedOnly) {
      newMovieArr = newMovieArr.filter((film) => (film.bookmarked === bookmarkedOnly));
    }
    if (selectedGenre.length > 0) {
      newMovieArr = newMovieArr.filter((film) => (film.genre === selectedGenre));
    }
    return newMovieArr;
  }

  AddMovieOnList(newMovie) {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movie = this.filteredMovies();
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={movie} />
        <AddMovie onClick={this.AddMovieOnList} />
      </div>
    );
  }
}

export default MovieLibrary;
