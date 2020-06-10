import React, { Component } from 'react';
import TextInput from './FormComponents/TextInput';
import TextArea from './FormComponents/TextArea';
import NumberInput from './FormComponents/NumberInput';
import Select from './FormComponents/Select';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.inititalState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.state = this.inititalState;
  }

  genres = {
    Ação: 'action',
    Comédia: 'comedy',
    Suspense: 'thriller',
  };

  handleChanges = (id, event) => {
    const { value } = event.target;

    id === 'rating' ? this.setState({ [id]: Number(value) }) : this.setState({ [id]: value });
  };

  createMovieCard = () => {
    const { onClick } = this.props;

    onClick(this.state);
    this.state = this.inititalState;
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <TextInput name="title" value={title} handle={this.handleChanges} label="Título" />
        <TextInput name="subtitle" value={subtitle} handle={this.handleChanges} label="Subtítulo" />
        <TextInput name="imagePath" value={imagePath} handle={this.handleChanges} label="Imagem" />
        <TextArea name="storyline" value={storyline} handle={this.handleChanges} label="Sinopse" />
        <NumberInput name="rating" value={rating} handle={this.handleChanges} label="Avaliação" />
        <Select
          name="genre"
          value={genre}
          handle={this.handleChanges}
          label="Gênero"
          options={this.genres}
        />
        <button onClick={this.createMovieCard}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
