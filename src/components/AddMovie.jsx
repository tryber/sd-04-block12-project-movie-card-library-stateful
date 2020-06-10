import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.btnAddMovie = this.btnAddMovie.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.htmlForm = this.htmlForm.bind(this);
  }

  btnAddMovie() {
    /* Executa a callback passada para o componente AddMovie via props, chamada
    onClick, que recebe como parâmetro o estado atual de AddMovie */
    this.props.onClick(this.state);
    this.setState(initialState); // reseta o estado para o valor inicial
  }

  changeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  htmlForm() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={title} onChange={this.changeInput} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="subtitle" value={subtitle} onChange={this.changeInput} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" name="imagePath" value={imagePath} onChange={this.changeInput} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={storyline} onChange={this.changeInput} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={rating} onChange={this.changeInput} />
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <div>
        <form>
          {this.htmlForm()}
          <label htmlFor="genre">Gênero</label>
          <select name="genre" value={genre} onChange={this.changeInput}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button type="submit" onClick={this.btnAddMovie}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
