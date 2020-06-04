import React from 'react';

export default class extends React.Component {
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

  hand(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  includeMovie(e) {
    e.preventdefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título
          <input name="title" type="text" value={title} onChange={() => this.hand} /></label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" type="text" value={subtitle} onChange={() => this.hand} /></label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" type="text" value={imagePath} onChange={() => this.hand} />
        </label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" value={storyline} onChange={() => this.hand} /></label>
        <label htmlFor="rating">Avaliação
          <input name="rating" type="number" value={rating} onChange={() => this.hand} />
        </label>
        <label htmlFor="genre">Gênero
          <select name="genre" value={genre} onChange={() => this.hand}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={() => this.includeMovie}>Adicionar filme</button>
      </form>
    );
  }
}
