import React, { Component } from 'react';
import Select from './SelectComp';
import Label from './Label';

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
    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onsubmit = this.onsubmit.bind(this);
  }

  onTextChange(event) {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
    this.setState(() => ({ [name]: value }));
  }

  onSelectChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  onsubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form className="addmovie-component" onSubmit={this.onsubmit}>
        <Label
          text="Titulo" type="text" name="title"
          value={this.state.title} onChange={this.onTextChange}
        />
        <Label
          text="Subtitulo" type="text" name="subtitle"
          value={this.state.subtitle} onChange={this.onTextChange}
        />
        <Label
          text="Imagem" type="text" name="imagePath"
          value={this.state.imagePath} onChange={this.onTextChange}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={this.state.storyline} onChange={this.onTextChange} />
        <Label
          text="Avaliacao" name="rating" value={this.state.rating} onChange={this.onTextChange}
        />
        <label htmlFor="genre">Genero</label>
        <Select name="genre" onChange={this.onSelectChange} defValue={this.state.genre} />
        <input type="submit" value="Adicionar Filme" />
      </form>
    );
  }
}

export default AddMovie;
