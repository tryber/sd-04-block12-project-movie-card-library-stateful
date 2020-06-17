// implement MovieLibrary component here
import React from 'react';
// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

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
  }

  addMovies(value) {
    this.setState((state) => ({ movies: state.movies.concat([value]) }));
  }

}

export default MovieLibrary;
