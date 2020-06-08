// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmakedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  // handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    // const { movies } = this.props;
    return (
      <div>
        <p>
          <small>MovieLibrary Req: 16-20</small>
        </p>
        <SearchBar
          searchText={this.state.searchText}
          bookmakedOnly={this.state.bookmakedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default MovieLibrary;
