// implement AddMovie component here
import React, { Component } from 'react';

const titulo = (a, b) => (
  <label htmlFor="Título">
    Título
    <input type="text" value={a} onChange={(e) => b(e)} />
  </label>
);

const subtitulo = (a, b) => (
  <label htmlFor="Subtítulo">
    Subtítulo
    <input type="text" value={a} onChange={(e) => b(e)} />
  </label>
);

const imagem = (a, b) => (
  <label htmlFor="Imagem">
    Imagem
    <input type="text" value={a} onChange={(e) => b(e)} />
  </label>
);

const story = (a, b) => (
  <label htmlFor="Sinopse">
    Sinopse
    <textarea type="text" cols="30" rows="10" value={a} onChange={(e) => b(e)} />
  </label>
);

const avalia = (a, b) => (
  <label htmlFor="Avaliação">
    Avaliação
    <input type="number" value={a} onChange={(e) => b(e)} />
  </label>
);

const gener = (a, b) => (
  <label htmlFor="Gênero">
    Gênero
    <select value={a} onChange={(e) => b(e)}>
      <option value="action">Ação</option>
      <option value="comedy">Comédia</option>
      <option value="thriller">Suspence</option>
    </select>
  </label>
);

const standard = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = standard;

    this.tito = this.tito.bind(this);
    this.sub = this.sub.bind(this);
    this.img = this.img.bind(this);
    this.sty = this.sty.bind(this);
    this.rat = this.rat.bind(this);
    this.gen = this.gen.bind(this);
    this.reset = this.reset.bind(this);
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

  reset() {
    this.setState(standard);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, storyline, imagePath, rating, genre } = this.state;
    return (
      <form>
        {titulo(title, this.tito)}
        {subtitulo(subtitle, this.sub)}
        {imagem(imagePath, this.img)}
        {story(storyline, this.sty)}
        {avalia(rating, this.rat)}
        {gener(genre, this.gen)}
        <button type="submit" onClick={() => { onClick(this.state); this.reset(); }}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
