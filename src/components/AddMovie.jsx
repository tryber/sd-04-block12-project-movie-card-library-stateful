import React from 'react';

const genreOptions = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

const stateEmpty = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = stateEmpty;

    this.Change = this.Change.bind(this);
    this.ClearState = this.ClearState.bind(this);
  }

  Change(event, name) {
    const { value } = event.target; // seta estados dinamicamente
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  ClearState() {
    this.setState(stateEmpty);
  }

  CreateInput(keyId, value, text, type = 'text') {
    // otimização de código dos inputs
    return (
      <div>
        <label htmlFor={keyId}>{text}</label>
        <input
          type={type}
          id={keyId}
          value={value}
          onChange={(event) => this.Change(event, keyId)}
        />
      </div>
    );
	}
	
  CreateSelect() {
    return (
      <div>
        <label htmlFor="genre">Gênero</label>
        <select
          name="genre"
          id="genre"
          value={this.state.genre}
          onChange={(event) => this.Change(event, "genre")}
        >
          {genreOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.CreateInput('title', this.state.title, 'Título')}
          {this.CreateInput('subtitle', this.state.subtitle, 'Subtítulo')}
          {this.CreateInput('imagePath', this.state.imagePath, 'Imagem')}
          <label htmlFor="storyline">Sinopse</label>
					<textarea id="storyline"
            value={this.state.storyline} onChange={(event) => this.Change(event, 'storyline')}
          ></textarea>
          {this.CreateInput('rating', this.state.rating, 'Avaliação', 'number')}
          {this.CreateSelect()}
          <button
            onClick={() => { onClick(this.state); this.ClearState(); }}>Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
