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
  }

  addNewMovie(e) {
    const { name, value } = e;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título:
            <input name="title" type="text" value={title} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="subtitle">
            Subtítulo:
            <input name="subtitle" type="text" value={subtitle} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="imagePath">
            Imagem:
            <input name="imagePath" type="text" value={imagePath} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="subtitle">
            Sinopse:
            <textarea value={storyline} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="rating">
            Avaliação:
            <input name="rating" type="number" value={rating} onChange={this.addNewMovie} />
          </label>
          <label htmlFor="genre">
            Gênero:
            <select name="genre" type="number" value={genre} onChange={this.addNewMovie}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" onClick={this.addNewMovie}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
