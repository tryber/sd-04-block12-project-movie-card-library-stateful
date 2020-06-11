import React from "react";

import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: "",
      bookmarkedOnly: false,
      selectedGenre: "",
      movies
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
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

  addMovie() {
    this.setState({});
  }

  filterMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies.filter(item => {
      if (searchText)
        return (
          item.title.toLowerCase().includes(searchText.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
          item.storyline.toLowerCase().includes(searchText.toLowerCase())
        );
      if (bookmarkedOnly) {
        return item.bookmarked === bookmarkedOnly;
      }
      if (selectedGenre) {
        return item.genre === selectedGenre;
      }
      return movies;
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filteredMovies = this.filterMovies();
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
        <AddMovie onClick={this.addMovie} />
        <MovieList movies={filteredMovies} />
      </div>
    );
  }
}

export default MovieLibrary;
