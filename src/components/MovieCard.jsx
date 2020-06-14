import React from 'react';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props; // pegando as propriedades de quem chama ele, Movie List
    const { title, subtitle, storyline, rating, imagePath } = movie; // pegando de movie, todos as info
    return (
      <div className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}
// só exibição na tela este componente
export default MovieCard;
