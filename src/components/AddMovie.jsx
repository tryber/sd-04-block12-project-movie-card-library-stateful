import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const TitleInput = (title) => (
  <div>
    <label htmlFor="title">Título</label>
    <input
      id="title"
      type="text"
      onChange={(e) => this.setState({ title: e.target.value })}
      value={title}
    />
  </div>
);

const SubtitleInput = (subtitle) => (
  <div>
    <label htmlFor="subtitle">Subtítulo</label>
    <input
      id="subtitle"
      type="text"
      onChange={(e) => this.setState({ subtitle: e.target.value })}
      value={subtitle}
    />
  </div>
);

const ImageInput = (imagePath) => (
  <div>
    <label htmlFor="imagePath">Imagem</label>
    <input
      id="imagePath"
      type="text"
      onChange={(e) => this.setState({ imagePath: e.target.value })}
      value={imagePath}
    />
  </div>
);

const StorylineTextArea = (storyline) => (
  <div>
    <label htmlFor="storyline">Sinopse</label>
    <textarea
      id="storyline"
      onChange={(e) => this.setState({ storyline: e.target.value })}
      value={storyline}
    />
  </div>
);

const RatingInput = (rating) => (
  <div>
    <label htmlFor="rating">Avaliação</label>
    <input
      id="rating"
      type="number"
      min="0"
      max="5"
      step="0.1"
      onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}
      value={rating}
    />
  </div>
);

const GenreSelect = (genre) => (
  <div>
    <label htmlFor="genre">Gênero</label>
    <select
      id="genre"
      onChange={(e) => this.setState({ genre: e.target.value })}
      value={genre}
    >
      <option value="action">Ação</option>
      <option value="comedy">Comédia</option>
      <option value="thriller">Suspense</option>
    </select>
  </div>
);

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onClickSubmit() {
    const onClick = this.props.onClick;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form>
        <TitleInput title={title} />
        <SubtitleInput subtitle={subtitle} />
        <ImageInput imagePath={imagePath} />
        <StorylineTextArea storyline={storyline} />
        <RatingInput rating={rating} />
        <GenreSelect genre={genre} />
        <button onClick={this.onClickSubmit}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
