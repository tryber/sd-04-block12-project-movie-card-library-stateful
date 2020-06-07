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
  }

  btnAddMovie() {
    /* Executa a callback passada para o componente AddMovie via props, chamada
    onClick, que recebe como parâmetro o estado atual de AddMovie */
    this.props.onClick(this.state);
    this.setState(initialState); // reseta o estado para o valor inicial
  };

  changeInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label>Título</label>
          <input type="text" name="title" value={title} onChange={this.changeInput} />
          <label>Subtítulo</label>
          <input type="text" name="subtitle" value={subtitle} onChange={this.changeInput} />
          <label>Imagem</label>
          <input type="text" name="imagePath" value={imagePath} onChange={this.changeInput} />
          <label>Sinopse</label>
          <textarea name="storyline" value={storyline} onChange={this.changeInput}></textarea>
          <label>Avaliação</label>
          <input type="number" name="rating" value={rating} onChange={this.changeInput} />
          <label>Gênero</label>
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
