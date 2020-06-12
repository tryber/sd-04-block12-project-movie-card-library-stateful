// implement AddMovie component here
import React, {Component} from 'react';

class AddMovie extends Component {
  constructor(props){
    super(props);
    //this.AddMovie = this.Movie.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
    this.modState = this.modState.bind(this);
    this.btnMovie = this.btnMovie.bind(this);
  }

  modState(e) {
    this.setState({
      title:e.target.value,
      subtitle:e.target.value,
      imagePath:e.target.value,
      storyline:e.target.value,
      rating:Number(e.target.value),
      genre:e.target.value,
    })
  }

  //Função btnMovie obtên o estado inicial do objeto e passa o onClik pela props
  btnMovie() {
    this.props.onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    })
  }

  render() {
    return (
      <form>
        <label>Título</label>
        <input type='text' value={this.state.title} onChange={this.modState}/>
        <label>Subtítulo</label>
        <input type='text' value={this.state.subtitle} onChange={this.modState}/>
        <label>Imagem</label>
        <input type='text' value={this.state.imagePath} onChange={this.modState}/>
        <label>Sinopse</label>
        <textarea value={this.state.storyline} onChange={this.modState}></textarea>
        <label>Avaliação</label>
        <input type='number' step='0' value={this.state.rating} onChange={this.modState}/>
        <label>Gênero</label>
        <select value={this.state.genre} onChange={this.modState}>
          <option value='action'>Ação</option>
          <option value='comedy'>Comédia</option>
          <option value='thriller'>Suspense</option>
        </select>
        <button onClick={this.btnMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
