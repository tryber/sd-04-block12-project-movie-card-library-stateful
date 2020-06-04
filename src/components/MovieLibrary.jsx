// implement MovieLibrary component here
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }
  onSearchTextChange = event => {
    const text = event.target.value;
    return this.state.movies
      .filter((elem) => elem.title.includes(text) || 
      elem.subtitle.includes(text) ||
      elem.storyline.includes(text)
      )
  }

  onBookmarkedChange = event => {
    if(event.target.value){
    return this.state.movies
      .filter((elem) => elem.bookmarked === 'true')
    }
  }

  onSelectedGenreChange = event => {
    const genre = event.target.value;
    return this.state.movies
      .filter((elem) => elem.genre === genre)
  }

  favoriteFilmes() {
    let NewArray = this.state.movies;
    if(this.state.bookmarkedOnly) {
      NewArray = this.onBookmarkedChange();
    }
    if(this.state.selectedGenre !== '') {
      NewArray = this.onSelectedGenreChange();
    }
    if(this.state.searchText !== '') {
      NewArray = this.onSearchTextChange();
    }
    return NewArray;
  }

  AddMovieOnList() {

  }

  render() {
    const filteredMovies = this.favoriteFilmes();
    return (
      <div>
        <SearchBar searchText={this.state.searchText} 
        onSearchTextChange={this.onSearchTextChange}
        bookmarkedOnly={this.state.bookmarkedOnly}
        onBookmarkedChange={this.onBookmarkedChange}
        selectedGenre={this.state.selectedGenre}
        onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.AddMovieOnList} />
      </div>
    );
  }
}

export default MovieLibrary;