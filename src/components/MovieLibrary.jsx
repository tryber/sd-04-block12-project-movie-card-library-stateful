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

  componentDidUpdate(prevProps, prevState) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { searchText: prevText, bookmarkedOnly: prevBookmark, selectedGenre: prevGenre, movies: prevMovies } = prevState;
    let passedMovies = this.props.movies;

    if (searchText !== prevText || bookmarkedOnly !== prevBookmark || selectedGenre !== prevGenre) {
      if (searchText !== '') {
        passedMovies = passedMovies.filter(({ title, subtitle, storyline }) =>
          title.toLowerCase().includes(searchText.toLowerCase()) ||
          subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
          storyline.toLowerCase().includes(searchText.toLowerCase()));
      }
      if (bookmarkedOnly === true) {
        passedMovies = passedMovies.filter((movie) => movie.bookmarked);
      }
      if (selectedGenre !== '') {
        passedMovies = passedMovies.filter((movie) => movie.genre === selectedGenre);
      }
      this.setState({ movies: passedMovies });
    }
  }

  onSearchTextChange(event) {
    const searchText = event.target.value;
    this.setState({ searchText });
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
