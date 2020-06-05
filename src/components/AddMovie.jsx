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

  render() {
    return (
      <div>
        <form>
          <label>Título</label>
          <input type="text" name="title" value={this.state.title} />
          <label>Subtítulo</label>
          <input type="text" name="subtitle" value={this.state.subtitle} />
          <label>Caminho da imagem</label>
          <input type="text" name="imagePath" value={this.state.imagePath} />
          <label>Sinopse</label>
          <textarea name="storyline" value={this.state.storyline}></textarea>
          <label>Avaliação</label>
          <input type="number" name="rating" value={this.state.rating} />
          <label>Gênero</label>
          <select name="genre" value={this.state.genre}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default AddMovie;
