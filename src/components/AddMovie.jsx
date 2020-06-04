import React from 'react';
import SelectField from './AddMovieSelectField';
import FormField from './AddMovieFormField';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  formElements() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const inputsArray = [
      {
        id: 'titleInput',
        name: 'title',
        type: 'text',
        value: title ,
        text: 'Título',
      },
      {
        id: 'subTitleInput',
        name: 'subtitle',
        type: 'text',
        value: subtitle,
        text: 'Subtítulo',
      },
      {
        id: 'imageInput',
        name: 'imagePath',
        type: 'text',
        value: imagePath,
        text: 'Imagem',
      },
      {
        id: 'storyLineInput',
        name: 'storyline',
        type: 'text',
        value: storyline,
        text: 'Sinopse',
      },
      {
        id: 'ratingInput',
        name: 'rating',
        type: 'text',
        value: rating,
        text: 'Avaliação',
      },
    ];
    return inputsArray.map(input => (
      <FormField
        key={input.id}
        input={input}
        handleChange={this.handleChange}
      />
    ));
  }

  render() {
    const { genre } = this.state;
    return (
      <form>
        {this.formElements()}
        <SelectField genre={genre} handleChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
