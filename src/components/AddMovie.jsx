// implement AddMovie component here
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
    this.modify = this.modify.bind(this);
    this.reset = this.reset.bind(this);
    this.button = this.button.bind(this);
  }

  modify(element) {
    this.setState({
      title: element.target.value,
      subtitle: element.target.value,
      imagePath: element.target.value,
      storyline: element.target.value,
      rating: Number(element.target.value),
      genre: element.target.value,
    });
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

  button() {
    this.props.onClick(this.state);
    this.reset();
  }

  render() {
    return (
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" value={this.state.title} onChange={this.modify} />
        <label htmlFor="subtitulo">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.modify} />
        <label htmlFor="imagem">Imagem</label>
        <input type="text" value={this.state.imagePath} onChange={this.modify} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea value={this.state.storyline} onChange={this.modify} />
        <label htmlFor="avaliacao">Avaliação</label>
        <input type="number" step="0" value={this.state.rating} onChange={this.modify} />
        <label htmlFor="genero">Gênero</label>
        <select value={this.state.genre} onChange={this.modify}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.button}>Adicionar filme</button>
      </form>
    );
  }

}

export default AddMovie;
