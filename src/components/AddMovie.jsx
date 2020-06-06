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
    const {title, subtitle, imagePath, storyline, rating, genre} = this.state
    const { onClick } = this.props;
    return (
      <form>
        <Input
          type="text"
          value={title}
          onChange={this.textChange}
          label="Título"
          name="title"
        />
        <Input
          type="text"
          value={subtitle}
          onChange={this.textChange}
          label="Subtítulo"
          name="subtitle"
        />
        <Input type="text" value={imagePath} onChange={this.textChange} label="Imagem" name="imagePath" />
        <Textarea type="textarea" value={storyline} onChange={this.textChange} label="Sinopse" name="storyline" />
        <Input type="number" value={rating} onChange={this.textChange} label="Avaliação" name="rating" />
        <Select2 value={genre} onChange={this.textChange} label="Gênero" />
        <button onClick={onClick}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
