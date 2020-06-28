// implement AddMovie component here
import React from 'react';

const genreOptions = [
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

    this.textChange = this.textChange.bind(this);
    this.numberChange = this.numberChange.bind(this);
    this.reset = this.reset.bind(this);
    this.createComponent = this.createComponent.bind(this);
  }

  textChange(event, text) {
    this.setState(() => ({ [text]: event.target.value }));
  }

  numberChange(event) {
    this.setState(() => ({ rating: Number(event.target.value) }));
  }

  createComponent(name, text, type, value) {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          value={value}
          onChange={(e) => this.textChange(e, name)}
        />
      </label>
    );
  }

  reset() {
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
        {this.createComponent('title', 'Título', 'text', title)}
        {this.createComponent('subtitle', 'Subtítulo', 'text', subtitle)}
        {this.createComponent('imagePath', 'Imagem', 'text', imagePath)}
        <label htmlFor="storyline">Sinopse
          <textarea value={storyline} onChange={(e) => this.textChange(e, 'storyline')} />
        </label>
        <label htmlFor="rating">Avaliação
          <input type="number" value={rating} onChange={this.numberChange} />
        </label>
        <label htmlFor="genre">Gênero
          <select value={genre} onChange={(e) => this.textChange(e, 'genre')}>
            {genreOptions.map((g) => (
              <option key={g.value} value={g.value}>{g.text}</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={this.reset}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
