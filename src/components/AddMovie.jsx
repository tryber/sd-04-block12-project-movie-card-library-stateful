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
    this.AddMovie = this.AddMovie.bind(this);
  }

  addNewMovie(event, name) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  AddMovie() {
    const newMovie = this.state;
    const { insertMovie } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    insertMovie(newMovie);
  }

  renderHalf() {
    const { storyline, rating, genre } = this.state;
    return (
      <div>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={storyline}
            onChange={(e) => this.addNewMovie(e, 'storyline')}
          />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={(e) => this.addNewMovie(e, 'rating')}
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select
            type="number"
            name="genre"
            value={genre}
            onChange={(e) => this.addNewMovie(e, 'genre')}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.AddMovie}>
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
            Título
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => this.addNewMovie(e, 'title')}
            />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              value={subtitle}
              onChange={(e) => this.addNewMovie(e, 'subtitle')}
            />
          </label>
          <label htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              value={imagePath}
              onChange={(e) => this.addNewMovie(e, 'imagePath')}
            />
          </label>
          {this.renderHalf()}
        </form>
      </div>
    );
  }
}
