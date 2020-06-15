import React from 'react';

const reset = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

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
  }

  handleChange(event, name) {
    const { value } = event.target;
    if (name === 'rating') {
      this.setState({ [name]: Number(value) });
    } else {
      this.setState({ [name]: value });
    }
  }

  createInput(name, value, text, type = 'text') {
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(elem) => this.handleChange(elem, name)}
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.createInput('title', title, 'Título')}
        {this.createInput('subtitle', subtitle, 'Subtítulo')}
        {this.createInput('imagePath', imagePath, 'Imagem')}
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          name="storyline" value={storyline}
          onChange={(e) => this.setState({ storyline: e.target.value })}
        />
        {this.createInput('rating', rating, 'Avaliação', 'number')}
        <label htmlFor="genre">Gênero</label>
        <select value={genre} onChange={(e) => this.setState({ genre: e.target.value })}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button
          type="button" onClick={() => { this.props.onClick(this.state); this.setState(reset); }}
        >Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
