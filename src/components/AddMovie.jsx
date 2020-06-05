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
    this.hand = this.hand.bind(this);
    this.includeMovie = this.includeMovie.bind(this);
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

  hand(event, name) {
    return (name === 'rating') ? 
    this.setState({ [name]: Number(event.target.value) })
    : this.setState({ [name]: event.target.value });
  }

  includeMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título
          <input name="title" type="text" value={title} onChange={(e) => this.hand(e, 'title')} /></label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" type="text" value={subtitle} onChange={(e) => this.hand(e, 'subtitle')} /></label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" type="text" value={imagePath} onChange={(e) => this.hand(e, 'imagePath')} />
        </label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" value={storyline} onChange={(e) => this.hand(e, 'storyline')} /></label>
        <label htmlFor="rating">Avaliação
          <input name="rating" type="number" value={rating} onChange={(e) => this.hand(e, 'rating')} />
        </label>
        <label htmlFor="genre">Gênero
          <select name="genre" value={genre} onChange={(e) => this.hand(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.includeMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
