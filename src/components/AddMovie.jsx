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
    this.setState({ [event.target.id]: event.target.value });
  }

  submitMovie() {
    this.setState({});
  }

  createTextInput(label, id, value) {
    return (
      <label htmlFor={id}>
        {label}
        <input type="text" id={id} value={value} onChange={this.changeState} />
      </label>
    );
  }

  createSelectInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select id="genre" value={genre} onChange={this.changeState}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form>
        {this.createTextInput("Título", "title", title)}
        {this.createTextInput("Subtítulo", "subtitle", subtitle)}
        {this.createTextInput("Imagem", "imagePath", imagePath)}
        <label htmlFor="storyline">
          Sinopse
          <textarea id="storyline" value={storyline} onChange={this.changeState} />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input type="number" value={rating} id={rating} onChange={this.changeState} />
        </label>
        {this.createSelectInput()}
        <button type="submit" onClick={this.submitMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
