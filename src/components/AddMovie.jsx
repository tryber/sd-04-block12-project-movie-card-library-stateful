// implement AddMovie component here
import React, { Component } from 'react';

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
    this.storeState = this.storeState.bind(this);
  }
  storeState(e) {
    const id = e.target.name;
    const value = e.target.value;
    this.setState({ [id]: value });
  }
  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input
          type="text" id="title" name="title"
          value={this.state.title} onChange={this.storeState}
        />
        <label htmlFor="subtitle">Subtítulo</label>
        <input
          type="text" id="subtitle" name="subtitle"
          value={this.state.subtitle} onChange={this.storeState}
        />
        <label htmlFor="image-path">Imagem</label>
        <input
          type="text" id="image-path" name="imagePath"
          value={this.state.imagePath} onChange={this.storeState}
        />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          type="text" id="storyline" name="storyline"
          value={this.state.storyline} onChange={this.storeState}
        />
      </form>
    );
  }
}

export default AddMovie;
