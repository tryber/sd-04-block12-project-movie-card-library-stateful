import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const TitleElement = (props) => {
  const { title, onChange } = props
  return (
    <div>
      <label htmlFor='title'>Título</label>
      <input
        id='title'
        type="text"
        onChange={(event) => onChange('title', event.target.value)}
        value={title}
      />
    </div>
  );
}

const SubtitleElement = (props) => {
  const { subtitle, onChange } = props
  return (
    <div>
      <label htmlFor='subtitle'>Subtítulo</label>
      <input
        id='subtitle'
        type="text"
        onChange={(event) => onChange('subtitle', event.target.value)}
        value={subtitle}
      />
    </div>
  );
}

const ImageElement = (props) => {
  const { imagePath, onChange } = props
  return (
    <div>
      <label htmlFor='imagePath'>Imagem</label>
      <input
        id='imagePath'
        type="text"
        onChange={(event) => onChange('imagePath', event.target.value)}
        value={imagePath}
      />
    </div>
  );
}

const StorylineElement = (props) => {
  const { storyline, onChange } = props;
  return (
    <div>
      <label htmlFor='storyline'>Sinopse</label>
      <textarea
        id='storyline'
        type="text"
        onChange={(event) => onChange('storyline', event.target.value)}
        value={storyline}
      />
    </div>
  );
}

const RatingElement = (props) => {
  const { rating, onChange } = props
  return (
    <div>
      <label htmlFor="rating">Avaliação</label>
      <input
        id="rating"
        type="number"
        min="0"
        max="5"
        step="0.1"
        onChange={(event) => onChange('rating', parseFloat(event.target.value))}
        value={rating}
      />
    </div>

  );
};

const GenreElement = (props) => {
  const { genre, onChange } = props;
  return (
    <div>
      <label htmlFor="genre">Gênero</label>
      <select
        id="genre"
        onChange={(event) => onChange('genre', event.target.value)}
        value={genre}
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </div>
  );
}


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChangeSetState = this.onChangeSetState.bind(this);
    this.onClickSubmitMovie = this.onClickSubmitMovie.bind(this);
  }

  onChangeSetState(state, value) {
    this.setState({ [state]: value });
  }

  onClickSubmitMovie() {
    const onClickAddMovie = this.props.onClick;
    onClickAddMovie(this.state);
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
        <TitleElement title={title} onChange={this.onChangeSetState} />
        <SubtitleElement subtitle={subtitle} onChange={this.onChangeSetState} />
        <ImageElement imagePath={imagePath} onChange={this.onChangeSetState} />
        <StorylineElement storyline={storyline} onChange={this.onChangeSetState} />
        <RatingElement rating={rating} onChange={this.onChangeSetState} />
        <GenreElement genre={genre} onChange={this.onChangeSetState} />
        <button type="button" onClick={this.onClickSubmitMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
