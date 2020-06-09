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
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title = '', subtitle = '', imagePath = '', storyline = '', genre = 'action', rating = 0 } = this.state;
    return (
      <form>
        <AddLabel htmlFor="title" text="Título" />
        <AddInput name="title" type="text" value={title} onChange={(e) => this.hChange(e)} />
        <AddLabel htmlFor="subtitle" text="Subtítulo" />
        <AddInput name="subtitle" type="text" value={subtitle} onChange={(e) => this.hChange(e)} />
        <AddLabel htmlFor="imagePath" text="Imagem" /><AddInput
          name="imagePath" type="text" value={imagePath} onChange={(e) => this.hChange(e)}
        />
        <AddLabel htmlFor="storyline" text="Sinopse" /><textarea
          name="storyline" type="text" value={storyline} onChange={(e) => this.hChange(e)}
        />
        <AddLabel htmlFor="rating" text="Avaliação" />
        <AddInput name="rating" type="number" value={rating} onChange={(e) => this.hChange(e)} />
        <AddLabel htmlFor="selectedGenre" text="Gênero" />
        <AddSel name="selectedGenre" value={genre} onChange={(e) => this.onSelectedGenreChange(e)}>
          <AddOpt value="action" text="Ação" />
          <AddOpt value="comedy" text="Comédia" />
          <AddOpt value="thriller" text="Suspense" />
        </AddSel>
        <button type="button" onClick={() => this.btadd()}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
