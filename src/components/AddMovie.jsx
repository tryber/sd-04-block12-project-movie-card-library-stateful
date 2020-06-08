import React from 'react';

export default class AddMovie extends React.Component {
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

  changes(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="title">
            Título<input type="text" onChange={this.changes} value={title} /></label>
          <label htmlFor="subtitle">
            Subtítulo<input type="text" onChange={this.changes} value={subtitle} /></label>
          <label htmlFor="image">
            Imagem<input type="text" onChange={this.changes} value={imagePath} /></label>
          <label htmlFor="story">
            Sinopse<textarea onChange={this.changes} value={storyline} /></label>
          <label htmlFor="rate">
            Avaliação<input type="number" onChange={this.changes} value={rating} /></label>
          <label htmlFor="genre">Gênero<select
            value={genre}
            onChange={this.changes}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
          </select></label>
          <button type="submit">Adicionar filme</button>
        </form>
      </div >
    );
  }
}
