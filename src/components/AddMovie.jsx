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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeSinopse = this.handleChangeSinopse.bind(this);
    this.handleChangeAvaliacao = this.handleChangeAvaliacao.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this);
    this.initialState = this.state;
    this.adicionarFilme = this.adicionarFilme.bind(this);
  }

  // função ADICIONAR FILME -> botão final form

  adicionarFilme() {
    this.setState(this.initialState);
    const { onClick } = this.props;
    onClick(this.state);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleChangeSinopse(event) {
    this.setState({ storyline: event.target.value });
  }

  handleChangeAvaliacao(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  handleChangeGenero(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" value={this.state.subtitle} onChange={this.handleChangeSubtitle} />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" value={this.state.imagePath} onChange={this.handleChangeImage} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea value={this.state.storyline} onChange={this.handleChangeSinopse} />
        </label>
        <label htmlFor="number">
          Avaliação
          <input type="number" value={this.state.rating} onChange={this.handleChangeAvaliacao} />
        </label>
        <label htmlFor="genre">
          Gênero
          <select value={this.state.genre} onChange={this.handleChangeGenero}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={(this.adicionarFilme)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
