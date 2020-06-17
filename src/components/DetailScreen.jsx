import React from 'react';
import Rating from './Rating';
import './DetailScreen.css';

class DetailScreen extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath, genre } = movie;
    return (
      <div className="movie-details">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5>{subtitle}</h5>
          <span className="movie-card-genre"> ({genre})</span>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default DetailScreen;