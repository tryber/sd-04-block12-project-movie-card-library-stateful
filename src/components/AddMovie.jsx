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
    this.addNewMovie = this.addNewMovie.bind(this);
    this.resetState = this.resetState.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  addNewMovie(event, name) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderButton() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        onClick={() => {
          onClick(this.state);
          this.resetState();
        }}
      >
      Adicionar filme
      </button>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input name="title" type="text" value={title} onChange={(e) => this.addNewMovie(e, 'title')} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input name="subtitle" type="text" value={subtitle} onChange={(e) => this.addNewMovie(e, 'subtitle')} />
        <label htmlFor="imagePath">Imagem</label>
        <input name="imagePath" type="text" value={imagePath} onChange={(e) => this.addNewMovie(e, 'imagePath')} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={storyline} onChange={(e) => this.addNewMovie(e, 'storyline')} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="number" value={rating} onChange={(e) => this.addNewMovie(e, 'rating')} />
        <label htmlFor="genre">Gênero:</label>
        <select name="genre" type="number" value={genre} onChange={(e) => this.addNewMovie(e, 'genre')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        {this.renderButton()}
      </form>
    );
  }
}

export default AddMovie;
