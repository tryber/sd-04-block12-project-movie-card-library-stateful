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
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título<input type="text" onChange={this.addMovie} value={title} /></label>
          <label htmlFor="subtitle">
            Subtítulo<input type="text" onChange={this.addMovie} value={subtitle} /></label>
          <label htmlFor="image">
            Imagem<input type="text" onChange={this.addMovie} value={imagePath} /></label>
          <label htmlFor="story">
            Sinopse<textarea onChange={this.addMovie} value={storyline} /></label>
          <label htmlFor="rate">
            Avaliação<input type="number" onChange={this.addMovie} value={rating} /></label>
          <label htmlFor="genre">Gênero<select
            value={genre}
            onChange={this.addMovie}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
          </select></label>
          <button type="submit">Adicionar filme</button>
        </form>
      </div >
    );
  }
}
