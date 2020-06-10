// implement AddMovie component here
import React from 'react';
import AddLabel from '../AddElements/AddLabel';
import AddInput from '../AddElements/AddInput';
// import AddButton from '../AddElements/AddButton';
//  por alguma razão não funcionou usando a sintaze de campos de classe¯\_(ツ)_/¯
import AddSel from '../AddElements/AddSel';
import AddOpt from '../AddElements/AddOpt';


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
      }
    );
  }

  createTextInputs() {
    const { title = '', subtitle = '', imagePath = '' } = this.state;
    return (
      <div className="depoiseupenso">
        <AddLabel htmlFor="title" text="Título" />
        <AddInput
          name="title" type="text" value={title}
          placeholder=" Digite o título" onChange={(event) => this.hChange(event)}
        />
        <AddLabel htmlFor="subtitle" text="Subtítulo" />
        <AddInput
          name="subtitle" type="text" value={subtitle}
          placeholder=" Digite o subtítulo" onChange={(event) => this.hChange(event)}
        />
        <AddLabel htmlFor="imagePath" text="Imagem" />
        <AddInput
          name="imagePath" type="text" value={imagePath}
          placeholder=" Escolha uma imagem" onChange={(event) => this.hChange(event)}
        />
      </div>
    );
  }

  createTextArea() {
    const { storyline = '' } = this.state;
    return (
      <div>
        <AddLabel htmlFor="storyline" text="Sinopse" />
        <textarea
          name="storyline" type="text" value={storyline}
          placeholder=" Sinopse" onChange={(event) => this.hChange(event)}
        />
      </div>
    );
  }

  createRatingElement() {
    const { rating = 0 } = this.state;
    return (
      <div>
        <AddLabel htmlFor="rating" text="Avaliação" />
        <AddInput
          name="rating" type="number" value={rating}
          onChange={(event) => this.hChange(event)}
        />
      </div>
    );
  }

  createGenreSelection() {
    const { genre = 'action' } = this.state;
    return (
      <div><AddLabel htmlFor="selectedGenre" text="Gênero" />
        <AddSel name="selectedGenre" value={genre} onChange={(e) => this.onSelectedGenreChange(e)}>
          <AddOpt value="action" text="Ação" />
          <AddOpt value="comedy" text="Comédia" />
          <AddOpt value="thriller" text="Suspense" />
        </AddSel>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.createTextInputs()}
        {this.createTextArea()}
        {this.createRatingElement()}
        {this.createGenreSelection()}
        <button type="button" onClick={() => this.btadd()}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
