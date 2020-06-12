import React from "react";

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

  changeState(event) {
    if (event.target.name === "rating") {
      this.setState({ [event.target.name]: +event.target.value });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  submitMovie(callback) {
    callback(this.state);
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    });
  }

  createInput(label, id, name, value, type) {
    return (
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={this.changeState}
        />
      </label>
    );
  }

  createSelectInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={genre}
          onChange={this.changeState}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form>
        {this.createInput("Título", "title", title, title, "text")}
        {this.createInput("Subtítulo", "subtitle", subtitle, subtitle, "text")}
        {this.createInput("Imagem", "imagePath", imagePath, imagePath, "text")}
        <label htmlFor="storyline">
          Sinopse
          <textarea
            id="storyline"
            name="storyline"
            value={storyline}
            onChange={this.changeState}
          />
        </label>
        {this.createInput("Avaliação", "rating", "rating", rating, "number")}
        {this.createSelectInput()}
        <button type="button" onClick={() => this.submitMovie(onClick)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
