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
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.changeImg = this.changeImg.bind(this);
    this.changeStoryLine = this.changeStoryLine.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
  }

  changeTitle(event) {
    this.setState({ title: event.target.value });
  }
  changeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }
  changeImg(event) {
    this.setState({ imagePath: event.target.value });
  }
  changeStoryLine(event) {
    this.setState({ storyline: event.target.value });
  }
  changeRating(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }
  changeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={this.state.title} onChange={this.changeTitle} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={this.state.subtitle} onChange={this.changeSubtitle} />
        <label htmlFor="image">Imagem</label>
        <input type="text" name="image" value={this.state.imagePath} onChange={this.changeImg} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea type="text" value={this.state.storyline} onChange={this.changeStoryLine} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={this.state.rating} onChange={this.changeRating} />
        <label htmlFor="genre">Gênero</label>
        <select value={this.state.genre} onChange={this.changeGenre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default AddMovie;
