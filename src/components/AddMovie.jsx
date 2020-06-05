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
    this.buttonFunction = this.buttonFunction.bind(this);
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

  buttonFunction(state) {
    const { onClick } = this.props;
    onClick(state);
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={title} onChange={this.changeTitle} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" value={subtitle} onChange={this.changeSubtitle} />
        <label htmlFor="image">Imagem</label>
        <input type="text" name="image" value={imagePath} onChange={this.changeImg} />
        <label htmlFor="sinopse">Sinopse</label>
        <textarea type="text" value={storyline} onChange={this.changeStoryLine} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={rating} onChange={this.changeRating} />
        <label htmlFor="genre">Gênero</label>
        <select value={genre} onChange={this.changeGenre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={() => this.buttonFunction(this.state)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
