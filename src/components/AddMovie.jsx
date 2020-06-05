/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  title() {
    const { title } = this.state;
    return (
      <label htmlFor="inputTitle">
        Título
        <input type="text" name="title" value={title} />
      </label>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="inputSubtitle">
        Subtítulo
        <input type="text" name="subtitulo" value={subtitle} />
      </label>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="inputImagePath">
        Imagem
        <input type="text" name="subtitulo" value={imagePath} />
      </label>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="inputStoryLine">
        Sinopse
        <input type="text" name="subtitulo" value={storyline} />
      </label>
    );
  }

  rating() {
    const { rating } = this.state;
    return (
      <label htmlFor="inputRating">
        Avaliação
        <input type="text" name="subtitulo" value={rating} />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="inputGenre">
        Gênero
        <input type="text" name="subtitulo" value={genre} />
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          {/* onClick={} */}
        </form>
      </div>
    );
  }
}

export default AddMovie;
