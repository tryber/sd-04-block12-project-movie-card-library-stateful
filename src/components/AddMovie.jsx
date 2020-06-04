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
          <label>
            Título:
            <input
              name="title"
              type="text"
              value={title}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Subtítulo:
            <input
              name="subtitle"
              type="text"
              value={subtitle}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Imagem:
            <input
              name="imagePath"
              type="text"
              value={imagePath}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Sinopse:
            <textarea value={storyline} onChange={this.addNewMovie} />
          </label>
          <label>
            Avaliação:
            <input type="number" value={rating} onChange={this.addNewMovie} />
          </label>
          <label>
            Gênero:
            <select type="number" value={genre} onChange={this.addNewMovie}>
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
