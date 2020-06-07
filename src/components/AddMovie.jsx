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

     this.handleInputChange = this.handleInputChange.bind(this);
     this.initialValue = this.initialValue.bind(this);
    }

      handleInputChange(event) {
        let  {name, value} = event.target;
        if(name === 'rating') value = Number(value);
        this.setState(
            {
            [name]: value,
        }
        );
}

initialValue() {
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
       const { onClick } = this.props
      return (
    <form>
        <label htmlFor="title">Título</label><br/>
        <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} /><br/>
        <label htmlFor="subtitle">Subtítulo</label>
        <input type="text" name="subtitle" id="subtitle" value={this.state.subtitle} onChange={this.handleInputChange} /><br/>
        <label htmlFor="image">Imagem</label>
        <input type="text" name="imagePath" id="image" value={this.state.imagePath} onChange={this.handleInputChange} /><br/>
        <label htmlFor="story">Sinopse</label>
        <textarea type="text" name="storyline" id="story" value={this.state.storyline} onChange={this.handleInputChange} /><br/>
        <label htmlFor="rate">Avaliação</label>
        <input type="number" name="rating" id="rate" value={this.state.rating} onChange={this.handleInputChange} /><br/>
        <label htmlFor="genre">Gênero</label>
        <select id="genre" name="genre" value={this.state.genre} onChange={this.handleInputChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
        </select><br/>
       <button value={this.state} onClick={() => {onClick(this.state); this.initialValue()}}>Adicionar filme</button>                                                                                                                                                                                                                                                                                                                                                                                                                                             
    </form>
    )
  }
}

export default AddMovie;
