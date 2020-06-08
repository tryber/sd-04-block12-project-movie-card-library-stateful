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
    this.changeRating = this.changeRating.bind(this);
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
    this.setState({ [name]: Number(value) });
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

  render() {
    const { onClick } = this.props;
    const { storyline } = this.state;
    const { genre } = this.state;

    return (
      <form>
        {this.createElement('title', 'Título')}
        {this.createElement('subtitle', 'Subttítulo')}
        {this.createElement('imagePath', 'Imagem')}
        <label htmlFor="input">
          Sinopse
          <textarea
            value={storyline}
            onChange={(e) => this.changeInput(e, 'storyline')}
          />
        </label>
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
        <buton
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
            this.clear();
          }}
        >
          Adicionar filme
        </buton>
      </form>
    );
  }
}
export default AddMovie;
