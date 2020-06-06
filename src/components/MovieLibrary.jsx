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
      movies: props.movies,
    };
  }

  filterAcerv(filmes) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtered = filmes;
    if (bookmarkedOnly) filtered = filmes.filter((f) => f.bookmarked);
    if (selectedGenre) filtered = filmes.filter((f) => f.genre === selectedGenre);
    if (searchText) {
      filtered = filmes.filter( // f se refere a filme.
        (f) => (f.title.includes(searchText)
        || f.subtitle.includes(searchText)
        || f.storyline.includes(searchText)),
      );
    }
    return filtered;
    // if (bookmarkedOnly) filtered = filmes.filter((f) => f.bookmarked);
    // if (selectedGenre) filtered = filmes.filter((f) => f.genre === selectedGenre);
    // if (searchText) {
    //   filtered = filmes.filter(
    //     (f) => (f.title.includes(searchText)
    //     || f.subtitle.includes(searchText)
    //     || f.storyline.includes(searchText))
    //     && bookmarkedOnly
    //     && selectedGenre.length > 0,
    //   );
    // }
    // return filtered;
    // if (bookmarkedOnly) filtered = filtered.filter((f) => f.bookmarked);
    // if (selectedGenre) filtered = filtered.filter((f) => f.genre === selectedGenre);
    // if (searchText) {
    //   filtered = filtered.filter(
    //     (f) => (f.title.includes(searchText)
    //     || f.subtitle.includes(searchText)
    //     || f.storyline.includes(searchText))
    //     && bookmarkedOnly
    //     && selectedGenre.length > 0,
    //   );
    // }
    // return filtered;
    // console.log(filmes);
    // return filmes.filter(
    //   (f) => (f.title.includes(searchText)
    //   || f.subtitle.includes(searchText)
    //   || f.storyline.includes(searchText)),
    // );
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
    } = this.state;
    const { movies } = this.props;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.filterAcerv(movies)} />
        <AddMovie onClick="" />
      </div>
    );
  }
}

export default MovieLibrary;
