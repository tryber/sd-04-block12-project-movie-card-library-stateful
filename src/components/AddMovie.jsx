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
  }


  addMovie(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="titulo">Título<input
            type="text"
            onChange={this.addMovie}
            value={title} />
          </label>
          <label htmlFor="subtitulo">Subtítulo<input
            type="text"
            onChange={this.addMovie}
            value={subtitle}
          />
          </label>
          <label htmlFor="imagepath">Imagem<input
            type="text"
            onChange={this.addMovie}
            value={imagePath}
          />
          </label>
          <label htmlFor="storyline">Sinopse<input
            type="textarea"
            onChange={this.addMovie}
            value={storyline}
          />
          </label>
          <label htmlFor="rating">Avaliação<input type="text"
            onChange={this.addMovie}
            value={rating}
          />
          </label>
          <label htmlFor="genre">Gênero<input
            type="text"
            onChange={this.addMovie}
            value={genre}
          />
          </label>
        </form>
      </div >
    );
  }
}
