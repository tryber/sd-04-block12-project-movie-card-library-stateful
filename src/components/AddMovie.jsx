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

  addNewMovie(e) {
    const { name, value } = e;
    this.setState({ [name]: value });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (      
        <form>
          <label htmlFor="title">Título:</label>
            <input name="title" type="text" value={title} onChange={this.addNewMovie} />          
          <label htmlFor="subtitle">Subtítulo:</label>
            <input name="subtitle" type="text" value={subtitle} onChange={this.addNewMovie} />
          <label htmlFor="imagePath">Imagem:</label>
            <input name="imagePath" type="text" value={imagePath} onChange={this.addNewMovie} />
          <label htmlFor="subtitle">Sinopse:</label>
            <textarea value={storyline} onChange={this.addNewMovie} />
          <label htmlFor="rating">Avaliação:</label>
            <input name="rating" type="number" value={rating} onChange={this.addNewMovie} />          
          <label htmlFor="genre">Gênero:</label>
            <select name="genre" type="number" value={genre} onChange={this.addNewMovie}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>          
          <button type="submit" onClick={this.addNewMovie}>Adicionar filme</button>
        </form>      
    );
  }
}

export default AddMovie;
