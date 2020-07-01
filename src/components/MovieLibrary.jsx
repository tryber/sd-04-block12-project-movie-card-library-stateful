import React from 'react';
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
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
  }

  onSearchTextChange(event) {
    const searchText = event.target.value;
    let passedMovies = this.props.movies;

    if (searchText !== '') {
      passedMovies = passedMovies.filter(({ title, subtitle, storyline }) =>
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        storyline.toLowerCase().includes(searchText.toLowerCase()));
    }

    this.setState({ searchText, movies: passedMovies });
  }

  onBookmarkedChange(event) {
    const bookmarkedOnly = event.target.checked;
    this.setState({ bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    const selectedGenre = event.target.value;
    this.setState({ selectedGenre });
  }

  onClickAddMovie(movie) {
    const movies = this.state.movies;
    movies.push(movie);
    this.setState({ movies });
  }

  /*let moviesResult = movies;

   

    if (bookmarkedOnly === true) {
      moviesResult = moviesResult.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre !== '') {
      moviesResult = moviesResult.filter((movie) => movie.genre === selectedGenre);
    } */

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state;

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
        <MovieList
          movies={movies}
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
        />
        <AddMovie onClick={this.onClickAddMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
