// implement AddMovie component here
import React from 'react';

const genreOptions = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

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

    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubtitle = this.updateSubtitle.bind(this);
    this.updateStory = this.updateStory.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
}

  updateTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  updateImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  updateStory(event) {
    this.setState({ storyline: event.target.value });
  }

  updateRating(event) {
    this.setState({ rating: event.target.value });
  }

  updateGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" value={this.state.title} onChange={this.updateTitle} />
          <label htmlFor="subt">Subtítulo</label>
          <input id="subt" type="text" value={this.state.subtitle} onChange={this.updateSubtitle} />
          <label htmlFor="image">Imagem</label>
          <input id="image"type="text" value={this.state.imagePath} onChange={this.updateImage} />
          <label htmlFor="sin">Sinopse</label>
          <textarea type="text" id="sin" value={this.state.storyline} onChange={this.updateStory} />
          <label htmlFor="rating">Avaliação</label>
          <input id="rating" type="number" value={this.state.rating} onChange={this.updateRating} />
          <label htmlFor="genre">Gênero</label>
          <select id="genre" value={this.state.genre} onChange={this.updateGenre}>
            {genreOptions.map((elementos) => (
              <option key={elementos.value} value={elementos.value}>{elementos.text}</option>
            ))}
          </select>
          <button type="submit">Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
