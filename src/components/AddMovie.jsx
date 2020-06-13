import React from 'react';
import FormLabel from './components_forms/FormLabel';
import FormInput from './components_forms/FormInput';
import FormSelc from './components_forms/FormSelc';
import FormOpt from './components_forms/FormOpt';

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
    this.hChange = this.hChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    // this.btadd = this.btadd.bind(this);
  }

  onSelectedGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  hChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: (name === 'rating') ? Number(value) : value });
  }

  btadd() {
    this.props.onClick(this.state);
    this.setState(
      this.state = {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  renderTextInputs() {
    const { title = '', subtitle = '', imagePath = '' } = this.state;
    return (
      <div className="txt-input">
        <FormLabel htmlFor="title" text="Título" />
        <FormInput
          name="title" type="text" value={title}
          placeholder=" Digite o título" onChange={(event) => this.hChange(event)}
        />
        <FormLabel htmlFor="subtitle" text="Subtítulo" />
        <FormInput
          name="subtitle" type="text" value={subtitle}
          placeholder=" Digite o subtítulo" onChange={(event) => this.hChange(event)}
        />
        <FormLabel htmlFor="imagePath" text="Imagem" />
        <FormInput
          name="imagePath" type="text" value={imagePath}
          placeholder=" Escolha uma imagem" onChange={(event) => this.hChange(event)}
        />
      </div>
    );
  }

  renderTextArea() {
    const { storyline = '' } = this.state;
    return (
      <div className="txt-input">
        <FormLabel htmlFor="storyline" text="Sinopse" />
        <textarea
          name="storyline" type="text" value={storyline}
          placeholder=" Sinopse" onChange={(event) => this.hChange(event)}
        />
      </div>
    );
  }

  renderRatingElement() {
    const { rating = 0 } = this.state;
    return (
      <div className="ratin-element">
        <FormLabel htmlFor="rating" text="Avaliação" />
        <FormInput
          name="rating" type="number" value={rating}
          onChange={(event) => this.hChange(event)}
          className="number-input"
        />
      </div>
    );
  }

  renderGenreSelection() {
    const { genre = 'action' } = this.state;
    return (
      <div>
        <FormLabel htmlFor="selectedGenre" text="Gênero" />
        <FormSelc
        name="selectedGenre"
        value={genre}
        onChange={(e) => this.onSelectedGenreChange(e)}>
          <FormOpt value="action" text="Ação" />
          <FormOpt value="comedy" text="Comédia" />
          <FormOpt value="thriller" text="Suspense" />
        </FormSelc>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.renderTextInputs()}
        {this.renderTextArea()}
        <div className="bottom-part">
          {this.renderRatingElement()}
          {this.renderGenreSelection()}
        </div>
          <button
            className="btadd"
            type="button"
            onClick={() => this.btadd()}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
