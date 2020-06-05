import React from 'react';
import inputData from './inputData';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    if (prevState.subtitle !== subtitle) {
      this.setState({ subtitle: subtitle });
    }
    if (prevState.title !== title) {
      this.setState({ title: title });
    }
    if (prevState.imagePath !== imagePath) {
      this.setState({ imagePath });
    }
    if (prevState.storyline !== storyline) {
      this.setState({ storyline });
    }
    if (prevState.subtitle !== subtitle) {
      this.setState({ subtitle });
    }
    if (prevState.rating !== rating) {
      this.setState({ rating });
    }
    if (prevState.genre !== genre) {
      this.setState({ genre });
    }
  }

  handleChange(e, name) {
    const {
      target: { value },
    } = e;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputElement(id, name, type, text, value) {
    return (
      <label key={id} htmlFor={id}>
        {text}
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={e => this.handleChange(e, name)}
        />
      </label>
    );
  }

  textareaElement(id, name, type, text, value) {
    return (
      <label key={id} htmlFor={id}>
        {text}
        <textarea
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={e => this.handleChange(e, name)}
        />
      </label>
    );
  }

  formElements() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const inputsValueArray = [title, subtitle, imagePath, storyline, rating];

    return inputsValueArray.map((value, index) => {
      const { id, name, type, text } = inputData[index];
      if (type === 'text' || type === 'number') {
        return this.inputElement(id, name, type, text, value);
      }
      return this.textareaElement(id, name, type, text, value);
    });
  }

  selectFormElements() {
    const { genre } = this.state;
    return (
      <label htmlFor="genreInput">
        Gênero
        <select
          name="genre"
          id="genreInput"
          value={genre}
          onChange={e => this.handleChange(e, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        {this.formElements()}
        {this.selectFormElements()}
        <button
          value="Adicionar Filme"
          type="button"
          onClick={this.handleSubmit}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
