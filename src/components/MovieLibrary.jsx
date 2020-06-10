// implement MovieLibrary component here
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
    this.addNewMovie = this.addNewMovie.bind(this);
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

  moviesFiltered() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let filterMovies = [...movies];
    if (bookmarkedOnly) {
      filterMovies = filterMovies.filter((filme) => filme.bookmarked === true);
    }
    if (selectedGenre) {
      filterMovies = filterMovies.filter((filme) => filme.genre === selectedGenre);
    }
    if (searchText) {
      filterMovies = filterMovies.filter((filme) =>
      filme.title.includes(searchText) ||
      filme.subtitle.includes(searchText) ||
      filme.storyline.includes(searchText),
      );
    }
    return filterMovies;
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    // console.log(this);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.moviesFiltered()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
