// implement AddMovie component here
import React, { Component } from 'react';

const initialState = {
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
    this.state = initialState; // https://bit.ly/2UjQzyh
    this.setChange = this.setChange.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
  }

  // https://bit.ly/3cJhOsq
  setChange(e) {
    this.setState(
      e.target.name !== 'rating'
        ? { [e.target.name]: e.target.value }
        : { rating: Number(e.target.value) },
    );
  }
  // https://bit.ly/2UjQzyh
  resetBuilder() {
    this.props.onClick(this.state);
    this.setState(initialState);
  }
  createOption() {
    return (
      <label htmlFor="genre">
        Gênero
        <select name="genre" value={this.state.genre} onChange={this.setChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div>
        <p>
          <small>AddMovie Req: 6-15</small>
        </p>
        <form>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" value={this.state.title} onChange={this.setChange} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input id="subtitle" type="text" value={this.state.subtitle} onChange={this.setChange} />
          <label htmlFor="image">Imagem</label>
          <input id="image" type="text" value={this.state.imagePath} onChange={this.setChange} />
          <label htmlFor="story">Sinopse</label>
          <textarea id="story" type="text" value={this.state.storyline} onChange={this.setChange} />
          <label htmlFor="rating">Avaliação</label>
          <input id="rating" type="number" value={this.state.rating} onChange={this.setChange} />
          {this.createOption()}
          <button type="submit" onClick={this.resetBuilder}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
