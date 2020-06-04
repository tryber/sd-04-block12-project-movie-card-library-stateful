import React from 'react';
import SelectField from './AddMovieSelectField';
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
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
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

  render() {
    const { genre } = this.state;
    return (
      <form>
        {this.formElements()}
        <SelectField genre={genre} handleChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
