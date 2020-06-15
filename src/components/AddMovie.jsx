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
  }
  ChangeState = (event) => {
    if (event.target.name === 'rating') {
      this.setState({ rating: Number(event.target.value) });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };
  createImput = (type, name, text) => {
    return (
      <div>
        <label htmlFor={name}>{text}</label>
        <input
          type={type}
          name={name}
          value={this.state[name]}
          onChange={this.ChangeState}
        />
      </div>
    );
  };
  render() {
    const { onClick } = this.props;
    return (
      <form>
        {this.createImput('text', 'title', 'Título')}
        {this.createImput('text', 'subtitle', 'Subtítulo')}
        {this.createImput('text', 'imagePath', 'Imagem')}
        <label htmlFor="storyline">Sinopse</label>
        <textarea
          onChange={this.ChangeState}
          name="storyline"
          value={this.state.storyline}
        />
        {this.createImput('number', 'rating', 'Avaliação')}
        <label htmlFor="genre">Gênero</label>
        <select type="text" onChange={this.ChangeState} name="genre" value={this.state.genre} >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button onClick={() => console.log('clicou')}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
