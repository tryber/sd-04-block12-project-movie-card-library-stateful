import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(e, name) {
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  handleRating(event, name) {
    const { value } = event.target;
    this.setState({ [name]: Number(value) });
  }

  resetState(callback) {
    callback(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  newTextElement(label, name, value) {
    return (
      <label htmlFor={name}>
        {label}
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => this.handleChange(e, name)}
        />
      </label>
    );
  }

  newSelectElement() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          value={genre}
          type="text"
          name="genre"
          onChange={(e) => this.handleChange(e, 'genre')}
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
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form>
        {this.newTextElement('Título', 'title', title)}
        {this.newTextElement('Subtítulo', 'subtitle', subtitle)}
        {this.newTextElement('Imagem', 'imagePath', imagePath)}
        <label htmlFor="storyline">
          Sinopse
          <textarea value={storyline} name="storyline" onChange={(e) => this.handleChange(e, 'storyline')} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" value={rating} name="rating" onChange={(e) => this.handleRating(e, 'rating')} />
        </label>
        {this.newSelectElement()}
        <button type="button" onClick={() => this.resetState(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
