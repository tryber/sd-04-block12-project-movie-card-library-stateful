import React, { Component } from 'react';

export default class AddMovie extends Component {
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

  AddMovie.defaultProps = {
    onClick: function() {console.log('default')}
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

  updtSt(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  includeMovie(e) {
    e.preventDefault();
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título
          <input name="title" value={title} type="text" onChange={() => this.updtSt} /></label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" value={subtitle} type="text" onChange={() => this.updtSt} />
        </label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" value={imagePath} onChange={() => this.updtSt} /></label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" value={storyline} type="text" onChange={() => this.updtSt} />
        </label>
        <label htmlFor="rating">Avaliação
          <input name="rating" value={rating} type="number" onChange={() => this.updtSt} /></label>
        <label htmlFor="genre">Gênero
          <select name="genre" value={genre} onChange={() => this.updtSt}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select></label>
        <button type="button" onClick={() => this.includeMovie}>Adicionar filme</button>
      </form>
    );
  }
}
