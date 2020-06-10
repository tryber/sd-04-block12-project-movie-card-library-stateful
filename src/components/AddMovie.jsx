// implement AddMovie component here
import React, { Component } from 'react';

function InpTitle(props) {
  return (
    <input
      type="text" id="title" name="title"
      value={props.value} onChange={props.onchange}
    />
  );
}

function InpSubtitle(props) {
  return (
    <input
      type="text" id="subtitle" name="subtitle"
      value={props.value} onChange={props.onchange}
    />
  );
}

function InpImage(props) {
  return (
    <input
      type="text" id="image-path" name="imagePath"
      value={props.value} onChange={props.onchange}
    />
  );
}

function InpRating(props) {
  return (
    <input
      type="number" id="rating" name="rating"
      value={props.value} onChange={props.onchange}
    />
  );
}

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
    this.resetState = this.resetState.bind(this);
  }

  storeState(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'rating') {
      this.setState({ [name]: +(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <InpTitle value={this.state.title} onchange={this.storeState} />
        <label htmlFor="subtitle">Subtítulo</label>
        <InpSubtitle value={this.state.subtitle} onchange={this.storeState} />
        <label htmlFor="image-path">Imagem</label>
        <InpImage value={this.state.imagePath} onchange={this.storeState} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          type="text" id="storyline" name="storyline"
          value={this.state.storyline} onChange={this.storeState}
        />
        <label htmlFor="rating">Avaliação</label>
        <InpRating value={this.state.rating} onchange={this.storeState} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.resetState}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
