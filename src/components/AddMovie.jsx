// implement AddMovie component here
import React from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';
import AddButton from '../AddElements/AddButton';
import AddSel from '../AddElements/AddSel';
import AddOpt from '../AddElements/AddOpt';

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
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    // this.AddBtnOnClick = this.AddBtnOnClick(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: (name === 'rating') ? Number(value) : value });
  }

  onSelectedGenreChange(event) {
    this.setState({ genre: event.target.value });
  }
  // falta evento do botão
  render() {
    const { title, subtitle, imagePath, storyline, genre, rating } = this.state;
    return (
      <form>
        <AddLabel htmlFor="title" text="Título" />
        <AddInput name="title" type="text" value={title} onChange={(e) => this.handleChange(e)} />
        <AddLabel htmlFor="subtitle" text="Subtítulo" />
        <AddInput name="subtitle" type="text" value={subtitle} onChange={(e) => this.handleChange(e)} />
        <AddLabel htmlFor="imagePath" text="Imagem" />
        <AddInput name="imagePath" type="text" value={imagePath} onChange={(e) => this.handleChange(e)} />
        <AddLabel htmlFor="storyline" text="Sinopse" />
        <textarea name="storyline" type="text" value={storyline} onChange={(e) => this.handleChange(e)} />
        <AddLabel htmlFor="rating" text="Avaliação" />
        <AddInput name="rating" type="number" value={rating} onChange={(e) => this.handleChange(e)} />
        <AddLabel htmlFor="selectedGenre" text="Gênero" />
        <AddSel name="selectedGenre" value={genre} onChange={(e) => this.onSelectedGenreChange(e)}>
          <AddOpt value="action" text="Ação" />
          <AddOpt value="comedy" text="Comédia" />
          <AddOpt value="thriller" text="Suspense" />
        </AddSel>
        <AddButton type="button" text="Adicionar filme" />
      </form>
    );
  }
}

export default AddMovie;
