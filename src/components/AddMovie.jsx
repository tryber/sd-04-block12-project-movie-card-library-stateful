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
  }

  textChange(event, text) {
    this.setState(() => ({ [text]: event.target.value }));
  }

  numberChange(event) {
    this.setState(() => ({ rating: Number(event.target.value) }));
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
        <label htmlFor="title">Título
          <input type="text" value={title} onChange={(e) => this.textChange(e, 'title')} />
        </label>
        <label htmlFor="subtitle">Subtítulo
          <input type="text" value={subtitle} onChange={(e) => this.textChange(e, 'subtitle')} />
        </label>
        <label htmlFor="imagePath">Imagem
          <input type="text" value={imagePath} onChange={(e) => this.textChange(e, 'imagePath')} />
        </label>
        <label htmlFor="storyline">Sinopse
          <textarea value={storyline} onChange={(e) => this.textChange(e, 'storyline')} />
        </label>
        <label htmlFor="rating">Avaliação
          <input type="number" value={rating} onChange={this.numberChange} />
        </label>
        <label htmlFor="genre">Gênero
          <select value={genre} onChange={(e) => this.textChange(e, 'genre')}>
            {genreOptions.map((gOption) => (
              <option key={gOption.value} value={gOption.value}>{gOption.text} </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={this.reset}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
