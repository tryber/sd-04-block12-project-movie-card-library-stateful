import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const { subtitle, title, imagePath, storyline, rating, } = this.props.state;
    return [
      <label htmlFor="title">Título
        <input name="title" type="text"
          value={title} onChange={(e) => this.props.onChange(e, 'title')} />
      </label>,
      <label htmlFor="subtitle">Subtítulo
        <input name="subtitle" type="text"
          value={subtitle} onChange={(e) => this.props.onChange(e, 'subtitle')} />
      </label>,
      <label htmlFor="image">Imagem
        <input name="image" type="text"
          value={imagePath} onChange={(e) => this.props.onChange(e, 'imagePath')} />
      </label>,
      <label htmlFor="storyline">Sinopse
        <textarea name="storyline" type="text"
          value={storyline} onChange={(e) => this.props.onChange(e, 'storyline')} />
      </label>,
      <label htmlFor="rating">Avaliação
        <input name="rating" type="number"
          value={rating} onChange={(e) => this.props.onChange(e, 'rating')} />
      </label>,
    ];
  }
}

export default Inputs;
