import React from 'react';

export default class AddMovie extends React.Component {
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
    this.renderHalf = this.renderHalf.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  renderHalf() {
    const { storyline, rating, genre } = this.state;
    return (
      <div>
        <label htmlFor="storyline">
          Sinopse:
          <textarea type="text" name="storyline" value={storyline} onChange={this.addNewMovie} />
        </label>
        <label htmlFor="ranting">
          Avaliação:
          <input type="number" name="ranting" value={rating} onChange={this.addNewMovie} />
        </label>
        <label htmlFor="genre">
          Gênero:
          <select type="number" name="genre" value={genre} onChange={this.addNewMovie}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={this.addNewMovie}>
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    const { subtitle, title, imagePath } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título:
            <input type="text" name="title" value={title} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="subtitle">
            Subtítulo:
            <input type="text" name="subtitle" value={subtitle} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="imagePath">
            Imagem:
            <input type="text" name="imagePath" value={imagePath} onChange={this.addNewMovie} />
          </label>
          {this.renderHalf()}
        </form>
      </div>
    );
  }
}
