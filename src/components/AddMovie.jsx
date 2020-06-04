// implement AddMovie component here
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
    }
  }

  onChangeHandle = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      subtitle, title, imagePath, storyline, rating, genre
    } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input name="title" type="text" value={title} onChange={this.onChangeHandle} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input name="subtitle" type="text" value={subtitle} onChange={this.onChangeHandle} />
        </label>
        <label htmlFor="image">
          Image
          <input name="imagePath" type="text" value={imagePath} onChange={this.onChangeHandle} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea name="storyline" type="text" value={storyline} onChange={this.onChangeHandle} />
        </label>
        <label htmlFor="rating">
        Avaliação
          <input name="rating" type="number" value={rating} onChange={this.onChangeHandle} />
        </label>
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={genre} onChange={this.onChangeHandle}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
