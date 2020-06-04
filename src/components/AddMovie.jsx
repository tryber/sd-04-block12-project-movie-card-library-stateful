import React, { Component } from 'react';

// subtítulo
// título
// caminho da imagem
// sinopse^
// avaliação
// gênero

export default class extends Component {
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
  }

  resetState() {
    this.setState(
      {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  updateState(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  includeMovie(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título
          <input name="title" value={title} type="text" onChange={() => this.updateState} /></label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" value={subtitle} type="text" onChange={() => this.updateState} /></label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" value={imagePath} onChange={() => this.updateState} /></label>
        <label htmlFor="subtitle">Sinopse
          <textarea name="subtitle" value={storyline} type="text" onChange={() => this.updateState} /></label>
        <label htmlFor="rating">Avaliação
          <input name="rating" value={rating} type="number" onChange={() => this.updateState} /></label>
        <label htmlFor="genre">Gênero
          <select name="genre" value={genre} onChange={() => this.updateState}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select></label>
        <button type="button" onClick={() => this.includeMovie}>Adicionar filme</button>
      </form>
    );
  }
}
