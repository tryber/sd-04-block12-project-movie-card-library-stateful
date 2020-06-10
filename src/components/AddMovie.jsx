import React, { Component } from 'react';
import Select from './Select';

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
    this.txtChang = this.txtChang.bind(this);
    this.slctChange = this.slctChange.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  onsubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  slctChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  txtChang(event) {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="addmovie-component" onSubmit={this.onsubmit}>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={this.state.title} onChange={this.txtChang} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.txtChang} />
        <label htmlFor="imagePath">Imagem</label>
        <input
          type="text" name="imagePath" value={this.state.imagePath}
          onChange={this.txtChang}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={this.state.storyline} onChange={this.txtChang} />
        <label htmlFor="rating">Avaliação</label>
        <input name="rating" type="Number" value={this.state.rating} onChange={this.txtChang} />
        <label htmlFor="genre">Gênero</label>
        <Select
          name="genre" onChange={this.slctChange}
          selected={this.state.genre} value={this.state.genre}
        />
        <button type="submit" onClick={onClick}>Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
