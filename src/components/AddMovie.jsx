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

    this.addNewMovie = this.addNewMovie.bind(this);
  }

  addNewMovie(event) {
    const { name, value } = event;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label>
            Título:
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Subtítulo:
            <input
              type="text"
              name="subtitle"
              value={subtitle}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Imagem:
            <input
              type="text"
              name="imagePath"
              value={imagePath}
              onChange={this.addNewMovie}
            />
          </label>
          <label>
            Sinopse:
            <textarea
              type="text"
              name="storyline"
              value={storyline}
              onChange={this.addNewMovie}
            />
          </label>
        </form>
      </div>
    );
  }
}
