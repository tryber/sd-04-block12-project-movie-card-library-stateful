import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.changeInput = this.changeInput.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.bookmarkedChange = this.bookmarkedChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(movie) {
    this.setState(state => ({ movies: [...state.movies, movie] }));
  }

  changeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  bookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    const checkBookmark = (movie) => {
      if ((!bookmarkedOnly) || (bookmarkedOnly && movie.bookmarked === true)) {
        return movie;
      }
      return false;
    };

    const checkGenre = (movie) => {
      if ((selectedGenre && movie.genre === selectedGenre) || !selectedGenre) return movie;
      return false;
    };

    return movies.filter(movie => (movie.title.toLowerCase()
      .includes(searchText.toLowerCase()) || movie.subtitle.toLowerCase()
      .includes(searchText.toLowerCase()) || movie.storyline.toLowerCase()
      .includes(searchText.toLowerCase())) && checkBookmark(movie) && checkGenre(movie));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeInput}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.bookmarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeInput}
        />
        <MovieList movies={this.filterMovies(movies)} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
