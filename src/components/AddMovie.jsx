import React, { Component } from 'react';
import Select from './Select';
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
    this.setState(()=> this.state)
  }

  render() {
    const { onClick } = this.props;
    return (
      <form className="addmovie-component" onSubmit={this.onsubmit}>
        <Label
          text="Título" type="text" name="title" value={this.state.title} func={this.onTextChange}
        />
        <Label
          text="Subtítulo" type="text" name="subtitle"
          value={this.state.subtitle} func={this.onTextChange}
        />
        <Label
          text="Imagem" type="text" name="imagePath"
          value={this.state.imagePath} onChange={this.onTextChange}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={this.state.storyline} onChange={this.onTextChange} />
        <Label
          text="Avaliação" name="rating" type="Number"
          value={this.state.rating} onChange={this.onTextChange}
        />
        <label htmlFor="genre">Gênero</label>
        <Select name="genre" onChange={this.onSelectChange} 
          selected={this.state.genre} value={this.state.genre} />
        <button type="submit" onClick={onClick}>Adicionar Filme</button>
      </form>
    );
  }
}

export default AddMovie;
