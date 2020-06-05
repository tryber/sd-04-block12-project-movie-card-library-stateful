import React from 'react';

function Input(props) {
  return (
    <label htmlFor={props.name}>{props.label}
      <Input name={props.name} type={props.type} onChange={props.onchange} value={props.value} />
    </label>
  );
}

function Select(props) {
  return (
    <label htmlFor="genre">Gênero
      <select name="genre" type="select" value={props.value} onChange={props.onchange}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  );
}

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ subtitle: '', title: '', imagePath: '', storyLine: '', rating: 0, genre: 'action' });
    this.onClick = this.onClick.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  onClick(event) {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
    event.preventDefault();
  }

  changeState(event) {
    const { target } = event;
    this.setState({ ...this.state, [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={this.onClick}>
        <Input name={'title'} type={'text'} onchange={this.changeState} value={this.state.title} label={'Título'} />
        <Input name={'subtitle'} type={'text'} onchange={this.changeState} value={this.state.subtitle} label={'Subtítulo'} />
        <Input name={'imagePath'} type={'text'} onchange={this.changeState} value={this.state.imagePath} label={'Imagem'} />
        <Input name={'storyLine'} type={'textarea'} onchange={this.changeState} value={this.state.storyLine} label={'Sinopse'} />
        <Input name={'rating'} type={'text'} onchange={this.changeState} value={this.state.rating} label={'Avaliação'} />
        <Select onchange={this.changeState} value={this.state.genre} />
      </form>
    );
  }
}
