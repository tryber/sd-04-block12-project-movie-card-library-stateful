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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    this.setState(state => ({ [target.name]: target.value }));
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="titleInput">
          Título
          <input
            name="title"
            type="text"
            id="titleInput"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="subTitleInput">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            id="subTitleInput"
            value={subtitle}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="imageInput">
          Imagem
          <input
            name="imagePath"
            type="text"
            id="imageInput"
            value={imagePath}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="storyLineInput">
          Sinopse
          <input
            name="storyline"
            type="textarea"
            id="storyLineInput"
            value={storyline}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="ratingInput">
          Avaliação
          <input
            name="rating"
            type="number"
            id="ratingInput"
            value={rating}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="genreInput">
          Gênero
          <select
            name="genre"
            id="genreInput"
            value={genre}
            onChange={this.handleChange}
          >
            <option value="action" text="Ação">
              Ação
            </option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={this.handleSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
