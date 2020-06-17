import React from 'react';
import './MovieList.css';
import MovieCard from './MovieCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <TransitionGroup>
        <CSSTransition
          appear={true}
          timeout={3000}
          classNames="test"
          key={movies.title}
        >
          <div className="movie-list">
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default MovieList;
