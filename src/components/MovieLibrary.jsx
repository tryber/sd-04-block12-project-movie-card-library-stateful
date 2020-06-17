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

    this.addMovies = this.addMovies.bind(this);
    this.change = this.change.bind(this);
    this.movies = this.movies.bind(this);
  }

  movies() {
    const movies = this.props.movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let query = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      return title.includes(searchText) || subtitle.includes(searchText) ||
        storyline.includes(searchText);
    });
    if (selectedGenre) {
      query = query.filter((movie) => {
        const { genre } = movie;
        return selectedGenre === genre;
      });
    }
    if (bookmarkedOnly) {
      query = query.filter((movie) => movie.bookmarked);
    }
    return query;
  }

  addMovies(value) {
    this.setState((state) => ({ movies: state.movies.concat([value]) }));
  }

  change(element) {
    this.setState({
      searchText: element.target.value,
      bookmarkedOnly: element.target.checked,
      selectedGenre: element.target.value,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.change}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.change}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.change}
        />
        <MovieList movies={this.movies()} />
        <AddMovie onClick={this.addMovies} />
      </div>
    );
  }

}

export default MovieLibrary;
