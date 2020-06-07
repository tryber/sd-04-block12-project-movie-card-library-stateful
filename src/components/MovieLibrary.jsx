// implement MovieLibrary component here
import React from 'react';
import movies from './../data';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      filteredMovies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.AddMoviefunc = this.AddMoviefunc.bind(this);
    this.moviesFilter = this.moviesFilter.bind(this);

  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }
  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }
  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  AddMoviefunc(addMovie) {
    this.setState((state) => ({ movies: [...state.movies, addMovie] }));
  }
  moviesFilter() {
    console.log(this.state.searchText,'test', movies[0].title);
    const sF = this.state.searchText;
    const gF = this.state.selectedGenre;
    let filteredMovies = movies.filter((movie) => [movie.title, ''].includes(sF)
    || [movie.subtitle, ''].includes(sF) 
    || [movie.storyline, ''].includes(sF));
    filteredMovies = filteredMovies.filter((movie) => [movie.genre, ''].includes(gF));
    if (this.state.bookmarkedOnly) filteredMovies = filteredMovies.filter((movie) => movie.bookmarked === true)

    return  filteredMovies
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
        <MovieList movies={this.moviesFilter()} />
        <AddMovie onClick={this.AddMoviefunc} />

      </div>
    );
  }
}

export default MovieLibrary;
