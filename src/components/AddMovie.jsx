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
  render() {
    const { onClick, callback } = this.props;
    return (
      <form className="addMovie">
        {/* primeiro input -> titulo */}
        <label>Título</label>
        <input type="text" value={this.state.title}
         onChange={(e) => this.setState({ title: e.target.value })} />
        {/* segundo input -> subtitulo */}
        <label>Subtítulo</label>
        <input type="text" value={this.state.subtitle}
        onChange={(e) => this.setState({ subtitle: e.target.value })} />
        {/* terceiro input -> imagepath */}
        <label>Imagem</label>
        <input type="text" value={this.state.imagePath}
          onChange={(e) => this.setState({ imagePath: e.target.value })} />
        {/* quarto input -> textarea da sinopse */}
        <label>Sinopse</label>
        <textarea value={this.state.storyline}
          onChange={(e) => this.setState({ storyline: e.target.value })} />
        {/* quinto input -> avaliação */}
        <label>Avaliação</label>
        <input type="number" value={this.state.rating}
         onChange={(e) => this.setState({ rating: e.value })} />
        {/* sexto input -> select genero */}
        <label>Gênero</label>
        <select value={this.state.genre}
         onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        {/* setimo input -> botao submit */}
        <button onClick={(onClick) => this.state}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
