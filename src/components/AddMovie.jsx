import React from 'react';

const resetar = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class addMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = resetar;
    this.buttonAdd = this.buttonAdd.bind(this);
    this.changeState = this.changeState.bind(this);
    this.creatorInp = this.creatorInp.bind(this);
  }

  buttonAdd() {
    this.props.onClick(this.state);
    this.setState(resetar);
  }

  changeState(event) {
    const { value, name } = event.target;
    if (name === 'rating') this.setState({ [name]: Number(value) });
    else this.setState({ [name]: value });
  }

  creatorInp() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <div>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" value={title} onChange={this.changeState} />
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="subtitle" value={subtitle} onChange={this.changeState} />
        <label htmlFor="imagePath">Imagem</label>
        <input type="text" name="imagePath" value={imagePath} onChange={this.changeState} />
        <label htmlFor="storyline">Sinopse</label>
        <textarea name="storyline" value={storyline} onChange={this.changeState} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={rating} onChange={this.changeState} />
      </div>
    );
  }
  render() {
    const { genre } = this.state;
    return (
      <div>
        <form>
          {this.creatorInp()}
          <label htmlFor="genre">Gênero</label>
          <select name="genre" value={genre} onChange={this.changeState}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button type="submit" onClick={this.buttonAdd}>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default addMovie;
