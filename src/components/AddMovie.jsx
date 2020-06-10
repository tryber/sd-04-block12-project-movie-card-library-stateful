import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.inputs = this.inputs.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValuesRating(event) {
    const { value } = event.target;
    this.setState({ rating: Number(value) });
  }

  changeValues(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  inputGenre(value, name) {
    return (
      <label htmlFor="genre">
        Gênero
        <select value={value} onChange={(e) => this.changeValues(e, name)}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  inputs(type, label, value, name) {
    if (type === 'textarea') {
      return (
        <label htmlFor={value}>
          Sinopse
          <textarea onChange={(e) => this.changeValues(e, name)} value={value} />
        </label>
      );
    }
    return (
      <div>
        <label htmlFor={value}>
          {label}
          <input type={type} onChange={(e) => this.changeValues(e, name)} value={value} />
        </label>
      </div>
    );
  }

  initialState(callback) {
    callback(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.inputs('text', 'Título', title, 'title')}
        {this.inputs('text', 'Subtítulo', subtitle, 'subtitle')}
        {this.inputs('text', 'Imagem', imagePath, 'imagePath')}
        {this.inputs('textarea', 'Sinopse', storyline, 'storyline')}
        <div>
          <label htmlFor={rating}>
            Avaliação
            <input type="number" onChange={(e) => this.changeValuesRating(e)} value={rating} />
          </label>
        </div>
        {this.inputGenre(genre, 'genre')}

        <button type="submit" onClick={() => this.initialState(onClick)}>
          Adicionar filme
        </button>
      </form>
    );
  }
}
