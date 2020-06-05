// implement AddMovie component here
import React from 'react';

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
  }

  handleChange(event) {
    const { name, value } = event.target;
    const e = (name === 'rating') ? Number(value) : value;
    this.setState({ [name]: e });
  }

  createElement(type, name, text, value, callback = this.handleChange) {
    return (
      <label htmlFor={name}>
        {text}
        <input type={type} name={name} value={value} onChange={(event) => callback(event)} />
      </label>
    );
  }

  reset(onClick) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        {this.createElement('text', 'title', 'Título', title)}
        {this.createElement('text', 'subtitle', 'Subtítulo', subtitle)}
        {this.createElement('text', 'imagePath', 'Imagem', imagePath)}
        <label htmlFor="storyline">
          Sinopse
          <textarea nome="storyline" value={storyline} onChange={(event) => this.handleChange(event)} />
        </label>
        {this.createElement('number', 'rating', 'Avaliação', rating)}
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={genre} onChange={(event) => this.handleChange(event)}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <button type="button" onClick={() => this.reset(onClick)}>Adicionar filme</button>
        </label>
      </form>
    );
  }
}

export default AddMovie;
