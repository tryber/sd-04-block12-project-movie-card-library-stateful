import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((e) => (
          <MovieCard key={e.title} movie={e} />
        ))}
      </div>
    );
  }
}
export default MovieList;
