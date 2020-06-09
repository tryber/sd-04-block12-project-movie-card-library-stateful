// implement AddMovie component here
import React from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';
import AddButton from '../AddElements/AddButton';
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
    };
    this.handleChange = this.handleChange.bind(this);
    // this.AddBtnOnClick = this.AddBtnOnClick(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: (name === 'rating') ? Number(value) : value });
  }

  render() {
    const { title = '', subtitle = '', imagePath = '', storyline = '', genre = 'action', rating = 0, } = this.state;
    return (
      <form>
        <AddLabel htmlFor="title" text="Título" />
        <AddInput name="title" type="text" value={title} onChange={(event) => this.handleChange(event)} />
        <AddLabel htmlFor="subtitle" text="Subtítulo" />
        <AddInput name="subtitle" type="text" value={subtitle} onChange={(event) => this.handleChange(event)} />
        <AddLabel htmlFor="imagePath" text="Imagem" />
        <AddInput name="imagePath" type="text" value={imagePath} onChange={(event) => this.handleChange(event)} />
        <AddLabel htmlFor="storyline" text="Sinopse" />
        <textarea name="storyline" type="text" value={storyline} onChange={(event) => this.handleChange(event)} />
        <AddLabel htmlFor="rating" text="Avaliação" />
        <AddInput name="rating" type="number" value={rating} onChange={(event) => this.handleChange(event)} />
        <AddLabel htmlFor="selectedGenre" text="Gênero" />
        <select id="selectedGenre" name="selectedGenre" value={genre} onChange={(event) => this.handleChange(event)}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <AddButton type="button" text="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
