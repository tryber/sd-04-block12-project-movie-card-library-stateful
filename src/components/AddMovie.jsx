// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };

    this.tito = this.tito.bind(this);
    this.sub = this.sub.bind(this);
    this.img = this.img.bind(this);
    this.sty = this.sty.bind(this);
    this.rat = this.rat.bind(this);
    this.gen = this.gen.bind(this);
  }

  titulo(a, b) {
    return (
      <label htmlFor="Título">
        Título
        <input type="text" value={a} onChange={(e) => b(e)} />
      </label>
    );
  }

  subtitulo(a, b) {
    return (
      <label htmlFor="Subtítulo">
        Subtítulo
        <input type="text" value={a} onChange={(e) => b(e)} />
      </label>
    );
  }

  imagem(a, b) {
    return (
      <label htmlFor="Imagem">
        Imagem
        <input type="text" value={a} onChange={(e) => b(e)} />
      </label>
    );
  }

  story(a, b) {
    return (
      <label htmlFor="Sinopse">
        Sinopse
        <textarea type="text" cols="30" rows="10" value={a} onChange={(e) => b(e)} />
      </label>
    );
  }

  avalia(a, b) {
    return (
      <label htmlFor="Avaliação">
        Avaliação
        <input type="number" value={a} onChange={(e) => b(e)} />
      </label>
    );
  }

  gener(a, b) {
    return (
      <label htmlFor="Gênero">
        Gênero
        <select value={a} onChange={(e) => b(e)}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspence</option>
        </select>
      </label>
    );
  }
  tito(e) {
    return this.setState({ title: e.target.value });
  }

  sub(e) {
    return this.setState({ subtitle: e.target.value });
  }

  img(e) {
    return this.setState({ imagePath: e.target.value });
  }

  sty(e) {
    return this.setState({ storyline: e.target.value });
  }

  rat(e) {
    return this.setState({ rating: e.target.value });
  }

  gen(e) {
    return this.setState({ genre: e.target.value });
  }

  render() {
    const { subtitle, imagePath, storyline, rating, genre } = this.props;
    const { title } = this.state;
    return (
      <form>
        {this.titulo(title, this.tito)}
        {this.subtitulo(subtitle, this.sub)}
        {this.imagem(imagePath, this.img)}
        {this.story(storyline, this.sty)}
        {this.avalia(rating, this.rat)}
        {this.gener(genre, this.gen)}
        <button type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
