import React, { Component } from 'react';
import Input from './formsComponents/Input';
import Textarea from './formsComponents/TextArea';
import Select2 from './formsComponents/Select2';

class AddMovie extends Component {
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
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    const { name, value, type } = e.target;
    if (type === 'number') this.state({ [name]: parseFloat(value) });
    else this.setState({ [name]: value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      // tive que abreviar as props por causa do CC, legenda:
      // t = type; v = value; onC = onChange; l = label
      <form>
        <Input t="text" v={title} onC={this.textChange} l="Título" name="title" />
        <Input t="text" v={subtitle} onC={this.textChange} l="Subtítulo" name="subtitle" />
        <Input t="text" v={imagePath} onC={this.textChange} l="Imagem" name="imagePath" />
        <Textarea t="textarea" v={storyline} onC={this.textChange} l="Sinopse" name="storyline" />
        <Input t="number" v={rating} onC={this.textChange} l="Avaliação" name="rating" />
        <Select2 v={genre} onC={this.textChange} l="Gênero" />
        <button>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
