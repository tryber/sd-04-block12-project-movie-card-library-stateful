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
      movies: this.props.movies,
    };
    this.addmovie = this.addmovie.bind(this);
  }

  addmovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) =>
            this.setState({ searchText: e.target.value })
          }
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) =>
            this.setState({ bookmarkedOnly: !e.target.value })
          }
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) =>
            this.setState({ selectedGenre: e.target.value })
          }
        />
        <MovieList />
        <AddMovie onClick={(e) => this.addmovie(e)} />
      </div>
    );
  }
}

export default MovieLibrary;
