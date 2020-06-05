import React from 'react';

class AddMovie extends React.Component {
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
    this.changeState = this.changeState.bind(this);
  }

  changeState({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  makeInput(name, text, type, onchange = this.changeState) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          name={name}
          value={this.state[name]}
          onChange={(e) => onchange(e, name)}
        />
      </label>
    );
  }

  makeTextarea(name, text, onchange = this.changeState) {
    return (
      <label htmlFor={name}>
        {text}
        <textarea
          name={name}
          value={this.state[name]}
          onChange={(e) => onchange(e, name)}
        />
      </label>
    );
  }

  makeRating(name, text, type) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          name={name}
          value={this.state[name]}
          onChange={(e) =>
            this.setState({ rating: parseFloat(e.target.value) })
          }
        />
      </label>
    );
  }

  makeSelect(name, text, type, onchange = this.changeState) {
    return (
      <label htmlFor={name}>
        {text}
        <select
          type={type}
          name={name}
          value={this.state[name]}
          onChange={(e) => onchange(e, name)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  restoreState() {
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
    const { onClick } = this.props;
    return (
      <form>
        {this.makeInput('title', 'Título', 'text')}
        {this.makeInput('subtitle', 'Subtítulo', 'text')}
        {this.makeInput('imagePath', 'Imagem', 'text')}
        {this.makeTextarea('storyline', 'Sinopse')}
        {this.makeRating('rating', 'Avaliação', 'number')}
        {this.makeSelect('genre', 'Gênero', 'text')}
        <button
          type="button"
          onClick={() => {
            onClick(this.state);
            this.restoreState();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
