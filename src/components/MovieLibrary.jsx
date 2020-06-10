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
    this.addMov = this.addMov.bind(this);
    this.showMovies = this.showMovies.bind(this);
  }

  changeState(e) {
    // const valSel = e.target.options[e.target.selectedIndex].value;
    this.setState({
      searchText: e.target.value,
      bookmarkedOnly: e.target.checked,
      selectedGenre: e.target.value,
    });
  }

  addMov(stt) {
    const { subtitle, title, imagePath, storyline, rating, genre } = stt;
    const newMov = {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    };
    this.setState((state) => ({
      movies: state.movies.push(newMov),
    }));
  }

  showMovies() {
    const movies = this.props.movies
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let fil = movies.filter((movie) => {
      const { title, subtitle, storyline } = movie;
      return title.includes(searchText) || subtitle.includes(searchText) ||
        storyline.includes(searchText)
    });
    if (selectedGenre) {
      fil = fil.filter((movie) => {
        const { genre } = movie;
        return selectedGenre === genre
      });
    }
    if(bookmarkedOnly) {
      fil = fil.filter((movie) => movie.bookmarked)
    }
    return fil;
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
        <MovieList movies={this.showMovies()} />
        <AddMovie onClick={this.addMov} />
      </div>
    );
  }
}

export default MovieLibrary;
