// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    name === 'rating' ? this.setState({ [name]: Number(value) }) :
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <label htmlFor='title'>Título</label>
        <input type="text" name="title" value={title} onChange={() => this.handleChange} />
        <label htmlFor='subtitle'>Subtítulo</label>
        <input type="number" name="subtitle" value={subtitle} onChange={this.handleChange} />
        <label htmlFor='imagePath'>Imagem</label>
        <input type="text" name="imagePath" value={imagePath} onChange={this.handleChange} />
        <label htmlFor='storyline'>Sinopse</label>
        <textarea type="text" name="storyline" value={storyline} onChange={this.handleChange} />
        <label htmlFor='rating'>Avaliação</label>
        <input type="text" name="rating" value={rating} onChange={this.handleChange} />
        <label htmlFor='genre'>Gênero</label>
        <select name="genre" value={genre} onChange={this.handleChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={() => {onClick(this.state)}}>Adicionar filme</button>
      </form>
    );
  }
}
