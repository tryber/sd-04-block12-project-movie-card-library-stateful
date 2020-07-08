// implement AddMovie component here
import React from 'react';

const firstState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const obj = { action: 'Ação', comedy: 'Comédia', thriller: 'Suspense' };

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = firstState;
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
    this.passMovie = this.passMovie.bind(this);
    this.creatLabel = this.creatLabel.bind(this);
    this.creatLabelStory = this.creatLabelStory.bind(this);
    this.creatLabelRating = this.creatLabelRating.bind(this);
    this.creatLabelGenre = this.creatLabelGenre.bind(this);
    // this.teste = this.teste.bind(this);
  }

  handleChange(event, name) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  resetState() {
    this.setState(firstState);
  }

  passMovie() {
    this.props.onClick(this.state);
    this.resetState();
  }

  creatLabel(name, value, text, type = 'text') {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(elem) => this.handleChange(elem, name)}
        />
      </label>
    );
  }

  creatLabelStory(name, value, text, type = 'text') {
    return (
      <label htmlFor={name}>
        {text}
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={(elem) => this.handleChange(elem, name)}
        />
      </label>
    );
  }

  creatLabelRating(name, value, text, type = 'number') {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          name={name}
          value={value}
          max="5"
          min="0"
          step="0.1"
          onChange={(elem) => this.handleChange(elem, name)}
        />
      </label>
    );
  }

  creatLabelGenre(name, value, text, type = 'text') {
    return (
      <label htmlFor={name}>
        {text}
        <select
          type={type}
          name={name}
          value={value}
          onChange={(elem) => this.handleChange(elem, name)}
        >
          {Object.entries(obj).map(([key, elem]) => (
            <option value={key} key={key}>
              {elem}
            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          {this.creatLabel('title', title, 'Título')}
          {this.creatLabel('subtitle', subtitle, 'Subtítulo')}
          {this.creatLabel('imagePath', imagePath, 'Imagem')}
          {this.creatLabelStory('storyline', storyline, 'Sinopse')}
          {this.creatLabelRating('rating', rating, 'Avaliação')}
          {this.creatLabelGenre('genre', genre, 'Gênero')}
          <button type='submit' name='button' onClick={this.passMovie}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}
export default AddMovie;
