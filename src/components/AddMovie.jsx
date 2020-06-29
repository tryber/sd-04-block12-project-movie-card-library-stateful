import React from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onClickSubmit() {
    this.props.onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form>
        <label>Título:</label>
        <input
          type="text"
          onChange={(e) => this.setState({ title: e.target.value, })}
          value={title}
        ></input>
        <label>Subtítulo:</label>
        <input
          type="text"
          onChange={(e) => this.setState({ subtitle: e.target.value, })}
          value={subtitle}
        ></input>
        <label>Imagem:</label>
        <input
          type="text"
          onChange={(e) => this.setState({ imagePath: e.target.value, })}
          value={imagePath}
        ></input>
        <label>Sinopse:</label>
        <textarea
          onChange={(e) => this.setState({ storyline: e.target.value, })}
          value={storyline}
        ></textarea>
        <label>Avaliação:</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          onChange={(e) => this.setState({ rating: e.target.value, })}
          value={rating}
        ></input>
        <label>Gênero:</label>
        <select
          onChange={(e) => this.setState({ genre: e.target.value, })}
          value={genre}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={this.onClickSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
