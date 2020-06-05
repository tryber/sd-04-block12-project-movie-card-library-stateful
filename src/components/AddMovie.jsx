import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setTitle = this.setTitle.bind(this);
  }

  setTitle(e) {
    const { name, value } = e.target;
    this.setState(({ [name]: value }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.setTitle}
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={subtitle}
            onChange={this.setTitle}
          />
        </label>
        <label htmlFor="img">
          Imagem
          <input
            type="text"
            id="img"
            name="imagePath"
            value={imagePath}
            onChange={this.setTitle}
          />
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <textarea
            type="text"
            id="sinopse"
            name="storyline"
            value={storyline}
            onChange={this.setTitle}
          />
        </label>
        <label htmlFor="av">
          Avaliação
          <input
            type="number"
            id="av"
            name="rating"
            value={rating}
            onChange={this.setTitle}
          />
        </label>
        <label htmlFor="gen">
          Gênero
          <select
            id="gen"
            name="genre" // value={genre}
            onChange={this.setTitle}
          >
            <option></option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddMovie;
