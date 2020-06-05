import React, { Component } from 'react';

class Label extends Component {
  render() {
    return <label>{this.props.text}</label>
  }
}
// class Input extends Component {
//   render() {
//     return <input value={this.props.value} onChange={() => {this.props.handleChange(this.props.value)}} />
//   }
// }

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating: 0,
      genre: 'action',
    }
  }

  onTextChange = event => {
    const { name, value} = event.target;
    console.log(`${name}: ${value}`)
    this.setState((state)=>({
      [name]: value,
    }));
  }

  onsubmit(event) {
    console.log(this.state);
    event.preventDefault();  
  }

  render() {
    return (
      <form className="addmovie-component" onSubmit={this.onsubmit}>
        <Label text="Titulo" />
        <input type="text" name="title" value={this.state.title} onChange={this.onTextChange} />
        <Label text="Subtitulo" />
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.onTextChange} />
        <Label text="Imagem" />
        <input type="text" name="imagePath" value={this.state.imagePath} onChange={this.onTextChange} />
        <Label text="Sinopse" />
        <textarea name="storyline" value={this.state.storyline} onChange={this.onTextChange} />
        <Label text="Avaliacao" />
        <input name="rating" value={this.state.rating} onChange={this.onTextChange} />
        <Label text="Genero" />
        <select name={this.state.genre} onChange={this.onSelectGenreChange}>
          <option defaultValue={this.state.selectGenre}>Todos</option>
          <option value="action">Acao</option>
          <option value="comedy">Comedia</option>
          <option value="thriller">Suspense</option>
        </select>
        <input type="submit" value="Adicionar Filme"/>
      </form>
    )
  }
}

export default AddMovie;
