import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  funTest() {
    const { movies } = this.props;
    console.log(movies.length);
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {this.funTest()}
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
