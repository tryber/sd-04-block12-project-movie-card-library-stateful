import React, { Component } from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  onChangeHandler(event, type) {
    const { value } = event.target;
    if (type === 'rating') { this.setState({ [type]: +value }); } else this.setState({ [type]: value });
  }

  reset() {
    this.setState(initialState);
  }

  createInput(inputName, text, inputType = 'text') {
    const stat = this.state;
    return (
      <label htmlFor={inputName}>
        {text}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={stat[inputName]}
          onChange={(e) => this.onChangeHandler(e, inputName)}
        />
      </label>
    );
  }

  botao(onClick) {
    return (
      <div>
        <button
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state); this.reset();
          }}
        >
        Adicionar filme
        </button>
      </div>
    );
  }

  genero() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="Gênero">
          Gênero
          <select value={genre} onChange={(e) => this.onChangeHandler(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { storyline } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        <form id="form1">
          {this.createInput('title', 'Título')}
          {this.createInput('subtitle', 'Subtítulo')}
          {this.createInput('imagePath', 'Imagem')}
          <label htmlFor="input">
          Sinopse
            <textarea value={storyline} onChange={(e) => this.onChangeHandler(e, 'storyline')} />
          </label>
          {this.createInput('rating', 'Avaliação', 'number', this.handleChangeRating)}
          {this.genero()}
          {this.botao(onClick)}
        </form>
      </div>
    );
  }
}

export default AddMovie;

