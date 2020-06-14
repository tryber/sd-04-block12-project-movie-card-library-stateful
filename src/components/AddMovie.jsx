// implement AddMovie component here
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

    // this.inputChange = this.inputChange.bind(this);
    this.emptyValue = this.emptyValue.bind(this);
  }

  // inputChange() {}

  emptyValue() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input
            type="text"
            name="title"
            id="title"
            // value={this.state.title}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            // value={this.state.subtitle}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            name="imagem"
            id="imagem"
            // value={this.state.imagePath}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor="story">
          Sinopse
          <textarea
            type="text"
            name="sinopse"
            id="sinopse"
            // value={this.state.storyline}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor="evaluation">
        Avaliação
          <input
            type="number"
            name="evaluation"
            id="evaluation"
            // value={this.state.rating}
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor="genre">
        Gênero
          <select
            id="genre"
            name="genre"
            // value={this.state.genre}
            onChange={this.inputChange}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button
            type="button"
            value={this.state}
            onChange={() => {
              onclick(this.state);
              this.emptyValue();
            }}
          >
            Adicionar Filme
          </button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
