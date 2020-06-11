import React from "react";

import GenreSelection from "./GenreSelection";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };

    this.changeState = this.changeState.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
  }

  addFormInput(title, type, id, value) {
    return (
      <label htmlFor={id}>
        {title}
        <input type={type} id={id} value={value} onChange={this.changeState} />
      </label>
    );
  }

  addFormTextarea(title, id, value) {
    return (
      <label htmlFor={id}>
        {title}
        <textarea id={id} value={value} onChange={this.changeState} />
      </label>
    );
  }

  changeState(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  submitMovie() {
    this.setState({});
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.changeState}
          />
        </label>

        <label htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={this.changeState}
          />
        </label>

        <label htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={this.changeState}
          />
        </label>

        <label htmlFor="storyline">
          Sinopse
          <textarea
            id="stoyline"
            value={storyline}
            onChange={this.changeState}
          />
        </label>

        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={this.changeState}
          />
        </label>

        <GenreSelection
          id="genre"
          label="Gênero"
          value={genre}
          onChange={this.changeState}
          items={[
            <option key="action" value="action">
              Ação
            </option>,
            <option key="comedy" value="comedy">
              Comédia
            </option>,
            <option key="thriller" value="thriller">
              Suspense
            </option>
          ]}
        />

        {/* <label htmlFor="genre">
          Gênero
          <select id="genre" value={genre} onChange={this.changeState}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label> */}
        <button type="submit" onClick={this.submitMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
