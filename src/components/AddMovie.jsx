// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <form>
        <label htmlFor="Título">
          Título
          <input type="text" value={title} />
        </label>
        <label htmlFor="Subtítulo">
          Subtítulo
          <input type="text" value={subtitle} />
        </label>
        <label htmlFor="Imagem">
          Imagem
          <input type="text" value={imagePath} />
        </label>
        <label htmlFor="Sinopse">
          Sinopse
          <textarea value={storyline} cols="30" rows="10" />
        </label>
        <label htmlFor="Avaliação">
          Avaliação
          <input type="number" value={rating} />
        </label>
        <label htmlFor="Gênero">Gênero</label>
        <select value={genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspence</option>
        </select>
        <button>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
