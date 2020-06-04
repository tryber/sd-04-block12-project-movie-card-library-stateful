import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInput = this.changeInput.bind(this);
  }

  clear() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeRating({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  changeInput({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  createElement(name, text, inputType = 'text', callback = this.changeInput) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={inputType}
          name={name}
          id={name}
          value={this.state[name]}
          onChange={(event) => callback(event, name)}
        />
      </label>
    );
  }

  createSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(element) => this.changeInput(element, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { storyline } = this.state;
    return (
      <form>
        {this.createElement('title', 'Título')}
        {this.createElement('subtitle', 'Subtítulo')}
        {this.createElement('imagePath', 'Imagem')}
        <label htmlFor="input">
          Sinopse
          <textarea
            value={storyline}
            onChange={(e) => this.changeInput(e, 'storyline')}
          />
        </label>
        {this.createElement('rating', 'Avaliação', 'number', this.changeRating)}
        {this.createSelect()}
        <button
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
            this.clear();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
