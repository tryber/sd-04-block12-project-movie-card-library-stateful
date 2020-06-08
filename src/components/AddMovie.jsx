import React, { Component } from 'react';
import Input from './formsComponents/Input';
import Textarea from './formsComponents/TextArea';
import Select2 from './formsComponents/Select2';

const initialState = {
  genre: 'action',
  imagePath: '',
  rating: 0,
  storyline: '',
  subtitle: '',
  title: '',
};
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.tChange = this.tChange.bind(this);
    this.stateClear = this.stateClear.bind(this);
  }

  tChange(e) {
    const { name, value } = e.target;
    if (name === 'rating') this.setState({ [name]: Number(value) });
    else this.setState({ [name]: value });
  }

  stateClear() {
    this.setState({ ...initialState });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      // tive que abreviar as props por causa do CC, legenda:
      // t = type; v = value; onC = onChange; l = label; s = limite superior; i = limite inferior
      <form>
        <Input v={title} onC={this.tChange} l="Título" name="title" />
        <Input v={subtitle} onC={this.tChange} l="Subtítulo" name="subtitle" />
        <Input v={imagePath} onC={this.tChange} l="Imagem" name="imagePath" />
        <Textarea t="textarea" v={storyline} onC={this.tChange} l="Sinopse" name="storyline" />
        <Input t="number" v={rating} onC={this.tChange} l="Avaliação" name="rating" f={5} i={0} />
        <Select2 v={genre} onC={this.tChange} l="Gênero" />
        <button type="button" onClick={() => { onClick(this.state); this.stateClear(); }}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
