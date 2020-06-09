import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.inputs = this.inputs.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValues(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  inputs(type, label, value, name) {
    if (type === 'textarea')
      return (
        <label htmlFor={value}>
          Sinopse
          <textarea onChange={(e) => this.changeValues(e, name)} value={value} />
        </label>
      );
    if (label === 'Gênero')
      return (
        <label htmlFor='genre'>
          Gênero
          <select value={value} onChange={(e) => this.changeValues(e, name)}>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      );
    return (
      <div>
        <label htmlFor={value}>
          {label}
          <input
            type={type}
            onChange={(e) => this.changeValues(e, name)}
            value={value}
          />
        </label>
      </div>
    );
  }

  resetState(callback) {
    callback(this.state);
    this.state({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.inputs('text', 'Título', title, 'title')}
        {this.inputs('text', 'Subtítulo', subtitle, 'subtitle')}
        {this.inputs('text', 'Image', imagePath, 'imagePath')}
        {this.inputs('textarea', 'Sinopse', storyline, 'storyline')}
        {this.inputs('number', 'Avaliação', rating, 'rating')}
        {this.inputs('text', 'Gênero', genre, 'genre')}

        <button
          type='button'
          onClick={() => {
            this.resetState(this.state);
          }}>
          Adicionar filme
        </button>
      </form>
    );
  }
}
