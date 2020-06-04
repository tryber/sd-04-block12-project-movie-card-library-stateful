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

  restoreState() {
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
    const { onClick } = this.props;
    return (
      <form className="addMovie">
        <label htmlFor="title">Título
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        </label>

        <label htmlFor="subtitle">Subtítulo
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={(e) => this.setState({ subtitle: e.target.value })}
        />
        </label>

        <label htmlFor="imagePath">Imagem
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={(e) => this.setState({ imagePath: e.target.value })}
        />
        </label>

        <label htmlFor="storyline">Sinopse
        <textarea
        name="storyline"
          value={this.state.storyline}
          onChange={(e) => this.setState({ storyline: e.target.value })}
        />
        </label>

        <label htmlFor="rating">Avaliação
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}
        />
        </label>

        <label htmlFor="genre">Gênero
        <select
        name="genre"
          value={this.state.genre}
          onChange={(e) => this.setState({ genre: e.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        </label>
        
        <button
            type="button"
            onClick={() => {
              onClick(this.state);
              this.restoreState();
            }}
          >
            Adicionar filme
          </button>
      </form>
    );
  }
}

export default AddMovie;
