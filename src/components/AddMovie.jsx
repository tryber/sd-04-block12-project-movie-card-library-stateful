// implement AddMovie component here
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

    this.inputChange = this.inputChange.bind(this);
    this.emptyValue = this.emptyValue.bind(this);
  }

  inputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'rating') value = Number(value);
    this.setState({ [name]: value });
  }

  emptyValue() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.inputChange}
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={subtitle}
          onChange={this.inputChange}
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="image"
          value={imagePath}
          onChange={this.inputChange}
        />
      </label>
    );
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="story">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          id="story"
          value={storyline}
          onChange={this.inputChange}
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rate">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rate"
          value={rating}
          onChange={this.handleInputChange}
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderImage()}
        {this.renderStoryline()}
        {this.renderRating()}
        {this.renderSelect()}

        <button
          type="button"
          value={this.state}
          onClick={() => {
            onClick(this.state);
            this.emptyValue();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
