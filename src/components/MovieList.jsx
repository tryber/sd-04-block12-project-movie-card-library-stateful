import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.props;
    let moviesResult = movies;

    if (searchText !== '') {
      moviesResult = moviesResult.filter(({ title, subtitle, storyline }) =>
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        storyline.toLowerCase().includes(searchText.toLowerCase()));
    }

    if (bookmarkedOnly === true) {
      moviesResult = moviesResult.filter((movie) => movie.bookmarked);
    }

    if (selectedGenre !== '') {
      moviesResult = moviesResult.filter((movie) => movie.genre === selectedGenre);
    }

    return (
      <div className="movie-list">
        {moviesResult.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
