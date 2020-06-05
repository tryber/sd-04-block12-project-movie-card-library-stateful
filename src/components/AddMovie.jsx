import React, { Component } from 'react';

class AddMovie extends Component {
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

  setFields(e) {
    const { name, value } = e.target;
    this.setState(({ [name]: value }));
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    // const { onClick } = this.props;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" name="title" value={title} onChange={this.setFields} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" name="subtitle" value={subtitle} onChange={this.setFields} />
        </label>
        <label htmlFor="img">
          Imagem
          <input type="text" name="imagePath" value={imagePath} onChange={this.setFields} />
        </label>
        <label htmlFor="sinopse">
          Sinopse
          <textarea name="storyline" value={storyline} onChange={this.setFields} />
        </label>
        <label htmlFor="av">
          Avaliação
          <input type="number" name="rating" value={rating} onChange={this.setFields} />
        </label>
        <label htmlFor="gen">
          Gênero
          <select id="gen" name="genre" value={genre} onChange={this.setFields}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick="">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
