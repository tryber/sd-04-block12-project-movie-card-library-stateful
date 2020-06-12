// implement MovieLibrary component
import React, {Component} from 'react';
import SearchBar from './SearchBar';
import MoveList from './MovieList'
import AddMovie from './AddMovie'

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchText:'',
        bookmarkedOnly:false,
        selectedGenre:'',
        movies: this.props.movies
    };
    this.addMovies = this.addMovies.bind(this);
    this.allMovies = this.allMovies.bind(this);
  }

  setSearchText = (event) => {
    this.setState({
      searchText: event.target.value,
      selectedGenre: event.target.value,
      bookmarkedOnly: event.target.value = true
    })
  };

  addMovies(value) {
    this.setState((state) => ({movies: state.movies.concat([value])}));
  }

  allMovies() {
    const movies = this.props.movies;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtro = movies.filter((movie) =>{
      const { title, subtitle, storyline } = movie;
      return title.includes(searchText) || subtitle.includes(searchText) ||
      storyline.includes(searchText);
    });

    if(selectedGenre === true) {
      filtro = filtro.filter((movie) => {
        const { genre } = movie;
        return selectedGenre === genre;
      });
    }

    if(bookmarkedOnly) {
      filtro = filtro.filter((movie) => movie.bookmarked);
    }
    return filtro;
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText} onSearchTextChange={this.setSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly} onBookmarkedChange={this.setSearchText}
          selectedGenre={this.state.selectedGenre} onSelectedGenreChange={this.setSearchText}
        />
        <MoveList movies={this.allMovies()}/>
        <AddMovie onClick={this.addMovies}/>
      </div>
    );
  }
}

export default MovieLibrary;
