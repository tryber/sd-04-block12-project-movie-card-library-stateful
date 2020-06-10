// implement MovieLibrary component here
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.changeState = this.changeState.bind(this);
    this.curState = this.curState.bind(this);
  }

  changeState(e) {
    // const valSel = e.target.options[e.target.selectedIndex].value;
    this.setState({
      searchText: e.target.value,
      bookmarkedOnly: e.target.checked,
      selectedGenre: e.target.value,
    });
  }

  curState(stt) {
    const { subtitle, title, imagePath, storyline, rating, genre } = stt;
    const newMov = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    this.state.movies.push(newMov);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.changeState}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.changeState}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.changeState}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.curState} />
      </div>
    );
  }
}

export default MovieLibrary;
