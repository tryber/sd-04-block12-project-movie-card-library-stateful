// implement AddMovie component here
import React from 'react';
import CreateElement from './CreateElement';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      genre: 'action',
      rating: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    // this.AddBtnOnClick = this.AddBtnOnClick(this);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: (name === 'rating') ? Number(value) : value });
  }

  // AddBtnOnClick(onClick) {
  //   const bolo = { title = '', subtitle = '', imagePath = '', storyline = '', genre = 'action', rating = 0, } = this.props;
  //   this.setState(bolo);
  // }

  render() {
    const { title = '', subtitle = '', imagePath = '', storyline = '', genre = 'action', rating = 0, } = this.state;
  return (
      <form>
        <CreateElement.LabelElement htmlFor="title" text="Título" />
        <CreateElement.InputElement name="title" type="text" value={title} onChange={(event) => this.handleChange(event)} />
        <CreateElement.LabelElement htmlFor="subtitle" text="Subtítulo" />
        <CreateElement.InputElement name="subtitle" type="text" value={subtitle} onChange={(event) => this.handleChange(event)} />
        <CreateElement.LabelElement htmlFor="imagePath" text="Imagem" />
        <CreateElement.InputElement name="imagePath" type="text" value={imagePath} onChange={(event) => this.handleChange(event)} />
        <CreateElement.LabelElement htmlFor="storyline" text="Sinopse" />
        <textarea name="storyline" type="text" value={storyline} onChange={(event) => this.handleChange(event)} />
        <CreateElement.LabelElement htmlFor="rating" text="Avaliação" />
        <CreateElement.InputElement name="rating" type="number" value={rating} onChange={(event) => this.handleChange(event)} />
        <CreateElement.LabelElement htmlFor="selectedGenre" text="Gênero" />
        <select id="selectedGenre" name="selectedGenre" value={genre} onChange={(event) => this.handleChange(event)}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <CreateElement.ButtonElement type="button" text="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;