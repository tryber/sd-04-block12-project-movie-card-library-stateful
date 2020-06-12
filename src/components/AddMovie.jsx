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
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleTitle(e) {
    this.setState({title:e.target.value});
  }
  handleSub(e) {
    this.setState({subtitle:e.target.value});
  }
  handleImg = (e) => {
    this.setState({imagePath:e.target.value});
  }
  handleStory = (e) => {
    this.setState({storyline:e.target.value});
  }
  handleRating = (e) => {
    this.setState({rating:Number(e.target.value)});
  }
  handleGenre = (e) => {
    this.setState({genre:e.target.value});
  }

  //Função btnMovie obtên o estado inicial do objeto e passa o onClik pela props
  btnMovie = () => {
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
        <input type='text' value={this.state.title} onChange={this.handleTitle}/>
        <label>Subtítulo</label>
        <input type='text' value={this.state.subtitle} onChange={this.handleSub}/>
        <label>Imagem</label>
        <input type='text' value={this.state.imagePath} onChange={this.handleImg}/>
        <label>Sinopse</label>
        <textarea value={this.state.storyline} onChange={this.handleStory}></textarea>
        <label>Avaliação</label>
        <input type='number' step='0' value={this.state.rating} onChange={this.handleRating}/>
        <label>Gênero</label>
        <select value={this.state.genre} onChange={this.handleGenre}>
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
