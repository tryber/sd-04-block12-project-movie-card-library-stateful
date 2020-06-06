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
    this.setFields = this.setFields.bind(this);
  }

  setFields({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createPseudoElement(name, text, tipo = 'text', callBack = this.setFields) {
    const { state } = this;
    return (
      <label htmlFor={name}>
        {text}
        <input
          id={name}
          type={tipo}
          name={name}
          max={tipo === 'number' ? 5 : null}
          min={tipo === 'number' ? 0 : null}
          value={state[name]}
          onChange={(e) => callBack(e, name)}
        />
      </label>
    );
  }

  createPseudoDropDown() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={genre}
          onChange={(e) => this.setFields(e, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { storyline } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        {this.createPseudoElement('title', 'Título')}
        {this.createPseudoElement('subtitle', 'Subtítulo')}
        {this.createPseudoElement('imagePath', 'Imagem')}
        <label htmlFor="sinopse">
          Sinopse
          <textarea value={storyline} onChange={(e) => this.setFields(e, 'storyline')} />
        </label>
        {this.createPseudoElement('rating', 'Avaliação', 'number')}
        {this.createPseudoDropDown()}
        <button
          type="button"
          onClick={() => {
            onClick(this.state);
            this.reset();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
