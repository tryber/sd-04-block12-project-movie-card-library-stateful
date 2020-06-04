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

  handleChange(e) {
    const { target } = e;
    this.setState({ [target.name]: target.value });
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

  formElements() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const inputsValueArray = [title, subtitle, imagePath, storyline, rating];

    return inputsValueArray.map((value, index) => {
      const { id, name, type, text } = inputData[index];
      return (
        <label key={id} htmlFor={id}>
          {text}
          <input
            name={name}
            type={type}
            id={id}
            value={value}
            onChange={this.handleChange}
          />
        </label>
      );
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
          onChange={this.handleChange}
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
        <button value="Adicionar Filme" type="button" onClick={this.handleSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
