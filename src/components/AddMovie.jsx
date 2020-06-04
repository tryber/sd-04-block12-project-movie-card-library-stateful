import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
    this.changeStates = this.changeState.bind(this);
    this.onClick = this.onClick.bind(this);
  }
    changeStates = event => {
      const target = event.target;
      this.setState({[target.name]: target.value})
    };
    onClick = event => {
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      });
      event.preventDefault();
    };
    render() {
    return (
      <form onSubmit={this.onClick}>
        <label htmlFor="title">Título<input name="title" type="text" value={this.state.title} />
        </label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" type="text" value={this.state.subtitle} />
        </label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" type="text" value={this.state.imagePath} />
        </label>
        <label htmlFor="storyLine">Sinopse
          <input name="storyLine" type="textarea" value={this.state.storyLine} />
        </label>
        <label htmlFor="rating">Avaliação<input name="rating" type="text" value={this.state.rating} /></label>
        <label htmlFor="genre">Gênero
         <select name="genre" type="select" value={this.state.genre}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <input type="submit" value="Adicionar filme" onClick={this.onClick} />
      </form>
    );
  }
}
