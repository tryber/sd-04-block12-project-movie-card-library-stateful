// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.tito = this.tito.bind(this);
    this.sub = this.sub.bind(this);
    this.img = this.img.bind(this);
    this.sty = this.sty.bind(this);
    this.rat = this.rat.bind(this);
    this.gen = this.gen.bind(this);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form>
        <label htmlFor="Título">
          Título
          <input type="text" value={title} onChange={this.tito} />
        </label>
        <label htmlFor="Subtítulo">
          Subtítulo
          <input type="text" value={subtitle} onChange={this.sub} />
        </label>
        <label htmlFor="Imagem">
          Imagem
          <input type="text" value={imagePath} onChange={this.img} />
        </label>
        <label htmlFor="Sinopse">
          Sinopse
          <textarea value={storyline} cols="30" rows="10" onChange={this.sty} />
        </label>
        <label htmlFor="Avaliação">
          Avaliação
          <input type="number" value={rating} onChange={this.rat} />
        </label>
        <label htmlFor="Gênero">
          Gênero
          <select value={genre} onChange={this.gen}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspence</option>
          </select>
        </label>
        <button type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
