import React from 'react';

const genres = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createFormComponent = this.createFormComponent.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  };

  handleChange(event, name) {
    this.setState(() => ({ [name]: event.target.value }))
    console.log(event.target)
  }

  createFormComponent(title, name, type = 'text', value) {
    return (
      <label htmlFor={name}>
        {title}
        <input 
          name={name} type={type} value={value} onChange={((e) => this.handleChange(e, name))} 
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
    console.log(title);
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
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.text}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => this.resetState}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
