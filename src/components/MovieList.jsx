import React from 'react';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // ele entende que essa movies já veio passado lá do pai (MovieLibrary),
    // não é pra ficar procurando de onde veio aqui. É pra saber que é o pai e ver o que ele
    // está passando.
    const { movies } = this.props;
    console.log(this.props);
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
