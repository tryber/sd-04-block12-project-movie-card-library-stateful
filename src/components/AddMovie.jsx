// implement AddMovie component here
import React from 'react';
import Form from './Form';

const genres = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addmovie = this.addmovie.bind(this);
    this.addforminput = this.addforminput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(e, name) {
    //Must be refracted
    if (name === 'rating') {
      const test = Number(e.target.value);
      this.setState(() => ({ [name]: test }));
    } else {
      const { value } = e.target;
      this.setState(() => ({ [name]: value }));
    }
  }

  addmovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  addforminput(htmlForValue, title, typeValue, name, valueValue) {
    return (
      <label htmlFor={htmlForValue}>
        {title}
        <input
          type={typeValue}
          name={name}
          value={valueValue}
          onChange={e => this.handleChange(e, name)}
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form>
        {this.addforminput('title', 'Título', 'text', 'title', title)}
        {this.addforminput(
          'subtitle',
          'Subtítulo',
          'text',
          'subtitle',
          subtitle,
        )}
        {this.addforminput(
          'imagePath',
          'Imagem',
          'text',
          'imagePath',
          imagePath,
        )}
        <label htmlFor="storyline">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            value={this.state.storyline}
            onChange={e => this.handleChange(e, 'storyline')}
          />
        </label>
        {this.addforminput('rating', 'Avaliação', 'number', 'rating', rating)}
        <label htmlFor="genre">
          Gênero
          <select
            value={this.state.genre}
            onChange={e => this.handleChange(e, 'genre')}
          >
            {genres.map(genre => (
              <option key={genre.value} value={genre.value}>
                {genre.text}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={() => this.addmovie()}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
