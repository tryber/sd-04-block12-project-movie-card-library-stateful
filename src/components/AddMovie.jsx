import React from 'react';

const genres = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

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
    this.createFormComponent = this.createFormComponent.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event, name) {
    if (name === 'rating') {
      const n = Number(event.target.value);
      this.setState(() => ({ [name]: n }));
    } else {
      const { value } = event.target;
      this.setState(() => ({ [name]: value }));
    }
  }

  createFormComponent(title, name, type = 'text', value) {
    return (
      <label htmlFor={name}>
        {title}
        <input
          name={name}
          type={type}
          value={value}
          onChange={((e) => this.handleChange(e, name))}
        />
      </label>
    );
  }

  resetState() {
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

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.createFormComponent('Título', 'title', title)}
        {this.createFormComponent('Subtítulo', 'subtitle', subtitle)}
        {this.createFormComponent('Imagem', 'image', imagePath)}
        <label htmlFor="storyline">Sinopse
          <textarea value={storyline} onChange={((e) => this.handleChange(e, 'storyline'))} />
        </label>
        {this.createFormComponent('Avaliação', 'rating', 'number', rating)}
        <label htmlFor="genre">Gênero
          <select value={genre} onChange={((e) => this.handleChange(e, 'genre'))}>
            {genres.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => this.resetState()}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
