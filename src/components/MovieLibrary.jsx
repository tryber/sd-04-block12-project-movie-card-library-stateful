// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import data from '../data';
import DetailScreen from './DetailScreen';
import './MovieLibrary.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function filterSearchText(movie, searchText) {
  return movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText);
}

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
      show: true,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.toggle = this.toggle.bind(this);
    setTimeout(() => this.setState({ show: false }), 10);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange() {
    this.setState({ bookmarkedOnly: !this.state.bookmarkedOnly });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return movies.filter((movie) => {
      if (bookmarkedOnly) return movie.bookmarked;
      if (selectedGenre !== '') return movie.genre === selectedGenre;
      return filterSearchText(movie, searchText);
    });
  }

  addNewMovie(e) {
    this.setState((state) => ({ movies: [...state.movies, e] }));
  }

  renderSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <TransitionGroup>
        <CSSTransition
          appear={true}
          timeout={3000}
          classNames="fade"
        >
          <section className="lib-opt">
            <h3>Pesquisa</h3>
            <SearchBar
              className="SearchBar"
              searchText={searchText} onSearchTextChange={(event) => this.onSearchTextChange(event)}
              bookmarkedOnly={bookmarkedOnly} onBookmarkedChange={this.onBookmarkedChange}
              selectedGenre={selectedGenre} onSelectedGenreChange={this.onSelectedGenreChange}
            />
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  renderAddMovie() {
    return (
      <TransitionGroup>
        <CSSTransition
          appear={true}
          timeout={3000}
          classNames="fade"
        >
          <section className="lib-opt">
            <h3>Add Movie</h3>
            <AddMovie onClick={(e) => this.addNewMovie(e)} />
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  toggle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="Movie-Library">
        <div className="menu">
          <button className="menu-btn" onClick={() => this.toggle()}>
            <div className="menu-icon" />
            <div className="menu-icon" />
            <div className="menu-icon" />
          </button>
          {this.state.show &&
            <div className="lib-opt">
              {this.renderSearchBar()}
              {this.renderAddMovie()}
            </div>}
        </div>

        <div className="MovieList">
          <DetailScreen movie={data} />
          <MovieList movies={this.filterMovies()} />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
