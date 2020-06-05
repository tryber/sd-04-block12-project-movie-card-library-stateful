import React from 'react';
import SearchBar from './SearchBar';

import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange() {
    const { bookmarkedOnly } = this.state;
    this.setState({ bookmarkedOnly: !bookmarkedOnly });
  }

  renderMovieList() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    let filteredMovies = movies.filter(
      (movie) =>
        movie.title.includes(searchText) ||
        movie.subtitle.includes(searchText) ||
        movie.storyline.includes(searchText),
    );
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.genre === selectedGenre,
      );
    }
    return bookmarkedOnly
      ? filteredMovies.filter((movie) => movie.bookmarked)
      : filteredMovies;
  }

  addMovie({
    subtitle,
    title,
    imagePath,
    storyline,
    rating,
    genre,
  }) {
    return this.setState((state) => ({
      movies: [
        ...state.movies,
        {
          title,
          subtitle,
          storyline,
          rating,
          imagePath,
          bookmarked: false,
          genre,
        },
      ],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) =>
            this.setState({ searchText: e.target.value })
          }
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) =>
            this.setState({ selectedGenre: e.target.value })
          }
        />
        <MovieList movies={this.renderMovieList()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
