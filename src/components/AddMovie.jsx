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
      genre: 'action',
      rating: 0,
    }
}
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }
  //  calls `onClick` received as props from AddMovie, using its current state as parameter 
  
  //  resets AddMovie to its initial state when clicked by the user (21ms)
  //  mesma ideia do renderForm() em SearchBar para resolver o limite de 25 linhas em render
  renderForm = () => {
    const {
      title = '',
      subtitle = '',
      imagePath = '',
      storyline = '',
      genre = 'action',
      rating = 0,
      } = this.props;
    return (
      <form>
        <label htmlFor="title">Título
          <input name="title" type="text" value={title} onChange={(event) =>this.handleChange(event)} />
        </label>
        <label htmlFor="subtitle">Subtítulo
          <input name="subtitle" type="text" value={subtitle} onChange={(event) =>this.handleChange(event)} />
        </label>
        <label htmlFor="imagePath">Imagem
          <input name="imagePath" type="text" value={imagePath} onChange={(event) =>this.handleChange(event)} />
        </label>
        <label htmlFor="storyline">Sinopse
          <textarea name="storyline" type="text" value={storyline} onChange={(event) =>this.handleChange(event)} />
        </label>
        <label htmlFor="rating">Avaliação
          <input name="rating" type="number" value={rating} onChange={(event) =>this.handleChange(event)} />
        </label>
        <label htmlFor="selectedGenre">Gênero
          <select name="selectedGenre" value={genre} onChange={(event) =>this.handleChange(event)} >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
    <button>Adicionar filme</button>{/*parei aqui*/}
      </form>
    );
  }
  render() {
  return (
    this.renderForm()
  );
  }
}

export default AddMovie;