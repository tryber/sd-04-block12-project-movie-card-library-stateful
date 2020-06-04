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
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="addmovie-title-input">
          Título
          <input
            id="addmovie-title-input"
            type="text"
            value={title}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, title: v }));
            }}
          />
        </label>
        <label htmlFor="addmovie-subtitle-input">
          Subtítulo
          <input
            id="addmovie-subtitle-input"
            type="text"
            value={subtitle}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, subtitle: v }));
            }}
          />
        </label>
        <label htmlFor="addmovie-image-input">
          Imagem
          <input
            id="addmovie-subtitle-input"
            type="text"
            value={imagePath}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, imagePath: v }));
            }}
          />
        </label>
        <label htmlFor="addmovie-storyline-textarea">
          Sinopse
          <textarea
            id="addmovie-storyline-textarea"
            value={storyline}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, storyline: v }));
            }}
          />
        </label>
        <label htmlFor="addmovie-rating-input">
          Avaliação
          <input
            id="addmovie-rating-input"
            type="number"
            value={rating}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, rating: Number(v) }));
            }}
          />
        </label>
        <label htmlFor="addmovie-genre-select">
          Gênero
          <select
            value={genre}
            onChange={(e) => {
              const v = e.target.value;
              this.setState((state) => ({ ...state, genre: v }));
            }}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button
          onClick={() => {
            onClick(this.state);
            this.setState({
              subtitle: '',
              title: '',
              imagePath: '',
              storyline: '',
              rating: 0,
              genre: 'action',
            });
          }}
          type="submit"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
