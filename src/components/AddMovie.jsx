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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    const input = event.target;
    if (type === 'rating') { this.setState({ [type]: +input.value }); } else this.setState({ [type]: input.value });
    console.log(this.state);
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  formsOne() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Título
          <input type="text" onChange={(e) => this.handleChange(e, 'title')} value={title} name="title" />
        </label>
        <label htmlFor="input">
          Subtítulo
          <input type="text" value={subtitle} name="subtitle" onChange={(e) => this.handleChange(e, 'subtitle')} />
        </label>
        <label htmlFor="input">
          Imagem
          <input type="text" value={imagePath} name="imagePath" onChange={(e) => this.handleChange(e, 'imagePath')} />
        </label>
      </div>
    );
  }

  formstwo() {
    const { storyline, rating } = this.state;
    return (
      <div>
        <label htmlFor="input">
          Sinopse
          <textarea value={storyline} name="storyline" onChange={(e) => this.handleChange(e, 'storyline')} />
        </label>
        <div>
          <label htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              value={rating}
              placeholder="Avaliação"
              onChange={(e) => this.handleChange(e, 'rating')}
            />
          </label>
        </div>
      </div>
    );
  }

  render() {
    const { genre } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.formsOne()}
          {this.formstwo()}
          <div>
            <label htmlFor="genre">
              Gênero
              <select name="genre" value={genre} onChange={(e) => this.handleChange(e, 'genre')}>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
              </select>
            </label>
          </div>
          <div>
            <button type="button" onClick={this.handleSubmit}>Adicionar filme</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
