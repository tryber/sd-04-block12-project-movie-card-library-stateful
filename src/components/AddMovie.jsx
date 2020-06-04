// implement AddMovie component here
// necessita de estados a serem gerenciados

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

  //   handleInputChange(e) {
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     });
  // }

  render() {
    const { onClick, callback } = this.props;
    return (
      <form className="addMovie">
        {/* primeiro input -> titulo */}
        <label name="title">Título</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        />

        {/* segundo input -> subtitulo */}
        <label name="subtitle">Subtítulo</label>
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={e => this.setState({ subtitle: e.target.value })}
        />

        {/* terceiro input -> imagepath */}
        <label name="image">Imagem</label>
        <input
          type="text"
          name="imagepath"
          value={this.state.imagePath}
          onChange={e => this.setState({ imagePath: e.target.value })}
        />

        {/* quarto input -> textarea da sinopse */}
        <label name="sinopse">Sinopse</label>
        <textarea
          name="sinopse"
          value={this.state.storyline}
          onChange={e => this.setState({ storyline: e.target.value })}
        />

        {/* quinto input -> avaliação */}
        <label name="rating">Avaliação</label>
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={e => this.setState({ rating: e.value })}
        />

        {/* sexto input -> select genero */}
        <label name="gender">Gênero</label>
        <select
          value={this.state.genre}
          onChange={e => this.setState({ genre: e.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

        {/* setimo input -> botao submit */}
        <button onClick={onClick => this.state}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
