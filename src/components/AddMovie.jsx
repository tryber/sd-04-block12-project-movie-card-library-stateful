// implement AddMovie component here
import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event, name) {
    if (name === 'rating') {
      this.setState({ [name]: Number(event.target.value) });
    } else {
      this.setState({ [name]: event.target.value });
    }
  }

  handleClick(onClick) {
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createElement(type, name, text, value, callback = this.handleChange) {
    return (
      <label htmlFor={name}>
        {text}
        <input type={type} name={name} value={value} onChange={(event) => callback(event, name)} />
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        {this.createElement('text', 'title', 'Título', title)}
        {this.createElement('text', 'subtitle', 'Subtítulo', subtitle)}
        {this.createElement('text', 'imagePath', 'Imagem', imagePath)}
        <label htmlFor="storyline">Sinopse</label>
        <textarea value={storyline} onChange={(e) => this.handleChange(e, 'storyline')} />
        <label htmlFor="rating">Avaliação</label>
        <input type="number" name="rating" value={rating} onChange={(e) => this.handleChange(e, 'rating')} />
        <label htmlFor="genre">Gênero</label>
        <select name="genre" value={genre} onChange={(e) => this.handleChange(e, 'genre')}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button type="button" onClick={() => { this.handleClick(onClick); }}>Adicionar filme</button>
      </form>
    );
  }
}
