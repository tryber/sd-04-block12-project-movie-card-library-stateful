import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.insertMovie = this.insertMovie.bind(this);
    this.renderMovieList = this.renderMovieList.bind(this);
  }

  insertMovie(newMovie) {
    const { movies } = this.state;
    movies.push(newMovie);
    this.setState({ movies });
  }

  renderMovieList() {
    const { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = movies.filter(({ title, subtitle, storyline }) => {
      const inTitle = title.includes(searchText);
      const inSubtitle = subtitle.includes(searchText);
      const inStoryline = storyline.includes(searchText);
      return inTitle || inSubtitle || inStoryline;
    });
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return bookmarkedOnly ? filteredMovies.filter(({ bookmarked }) => bookmarked) : filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.setState({ searchText: event.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.setState({ selectedGenre: event.target.value })}
        />
        <MovieList movies={this.renderMovieList()} />
        <AddMovie insertMovie={() => this.insertMovie()} />
      </div>
    );
  }
}
