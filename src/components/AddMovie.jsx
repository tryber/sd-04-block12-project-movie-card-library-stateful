import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
  }

  addMovie = (event) => {
    const { name, value } = event;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <form>
          <label>Título<input type='text' onChange={this.addMovie} value={this.state.title} /></label>
          <label>Subtítulo<input type='text' onChange={this.addMovie} value={this.state.subtitle} /></label>
          <label>Imagem<input type='text' onChange={this.addMovie} value={this.state.imagePath} /></label>
          <label>Sinopse<input type='textarea' onChange={this.addMovie} value={this.state.storyline} /></label>
          <label>Avaliação<input type='text' onChange={this.addMovie} value={this.state.rating} /></label>
          <label>Gênero<input type='text' onChange={this.addMovie} value={this.state.genre} /></label>
        </form>
      </div >
    )
  }
}