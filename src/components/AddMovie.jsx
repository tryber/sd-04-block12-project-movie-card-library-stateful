import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInput = this.changeInput.bind(this);
  }

  clear() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  changeInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              id="subtitle"
              value={subtitle}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              id="imagePath"
              value={imagePath}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="storyline">
            Sinopse
            <textarea
              type="text"
              name="storyline"
              id="storyline"
              value={storyline}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              id="rating"
              value={rating}
              onChange={this.changeInput}
            />
          </label>
          <label htmlFor="genre">
            Gênero
            <select
              type="text"
              id="genre"
              name="genre"
              value={genre}
              onChange={this.changeInput}
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            value="Adicionar filme"
            onClick={() => {
              onClick(this.state);
              this.clear();
            }}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
