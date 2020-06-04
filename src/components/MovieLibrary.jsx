// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.AddMovieOnList = this.AddMovieOnList.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  favoriteFilmes(movies) {
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

    return movies.filter((movie) => (movie.title.toLowerCase()
      .includes(searchText.toLowerCase()) || movie.subtitle.toLowerCase()
      .includes(searchText.toLowerCase()) || movie.storyline.toLowerCase()
      .includes(searchText.toLowerCase())) && checkBookmark(movie) && checkGenre(movie));
  }
  }

  AddMovieOnList = newMovie => {
    this.setState((state) => ({ movies: [...state.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList movies={this.favoriteFilmes(movies)} />
        <AddMovie onClick={this.AddMovieOnList} />
      </div>
    );
  }
}

export default MovieLibrary;
