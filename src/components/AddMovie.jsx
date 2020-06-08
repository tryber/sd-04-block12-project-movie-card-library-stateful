// implement AddMovie component here
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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.initialValue = this.initialValue.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    // let { name, value } = event.target;
    if (name === 'rating') value = Number(value);
    this.setState({ [name]: value });
  }

  initialValue() {
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
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
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
          onChange={this.handleInputChange}
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

  renderSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select id="genre" name="genre" value={genre} onChange={this.handleInputChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
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
          value={this.state}
          onClick={() => {
            onClick(this.state);
            this.initialValue();
          }}
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
