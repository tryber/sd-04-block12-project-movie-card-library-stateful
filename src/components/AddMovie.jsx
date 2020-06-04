import React from 'react';

export default class AddMovie extends React.Component {
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
    this.addMovie = this.addMovie.bind(this);
  };


  addMovie(event) {
    this.setState({ [this.props]: value });
    console.log(name, value);
  };

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor='title'>
            Título<input type='text' onChange={this.addMovie} value={title} /></label>
          <label htmlFor='subtitle'>
            Subtítulo<input type='text' onChange={this.addMovie} value={subtitle} /></label>
          <label htmlFor='image'>
            Imagem<input type='text' onChange={this.addMovie} value={imagePath} /></label>
          <label htmlFor='story'>
            Sinopse<textarea onChange={this.addMovie} value={storyline} /></label>
          <label htmlFor='rate'>
            Avaliação<input type='text' onChange={this.addMovie} value={rating} /></label>
          <label htmlFor='genre'>
            Gênero<input type='text' onChange={this.addMovie} value={genre} /></label>
        </form>
      </div >
    );
  }
}