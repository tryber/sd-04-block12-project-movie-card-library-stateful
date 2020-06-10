import React, { Component } from 'react';

export default class AddMovie extends Component {
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
    this.submit = this.submit.bind(this);
  }

  funTitle() {
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </label>
    );
  }

  funSubTitle() {
    return (
      <label htmlFor="subTitle">
        Subtítulo
        <input
          type="text"
          value={this.state.subtitle}
          onChange={(event) => this.setState({ subtitle: event.target.value })}
        />
      </label>
    );
  }

  funImagePath() {
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          type="text"
          value={this.state.imagePath}
          onChange={(event) => this.setState({ imagePath: event.target.value })}
        />
      </label>
    );
  }

  funSinopse() {
    return (
      <label htmlFor="sinopse">
        Sinopse
        <textarea
          value={this.state.storyline}
          onChange={(event) => this.setState({ storyline: event.target.value })}
        />
      </label>
    );
  }

  funRaiting() {
    return (
      <label htmlFor="raiting">
        Avaliação
        <input
          type="number"
          value={this.state.rating}
          onChange={(event) => this.setState({ rating: parseFloat(event.target.value) })}
        />
      </label>
    );
  }

  funSelect() {
    return (
      <label htmlFor="selected">
        Gênero
        <select
          value={this.state.genre}
          onChange={(event) => this.setState({ genre: event.target.value })}
        >
          <option value="action" >Ação</option>
          <option value="comedy" >Comédia</option>
          <option value="thriller" >Suspense</option>
        </select>
      </label>
    );
  }

  submit(event) {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    const { onClick } = this.props;
    onClick(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <div>
          {this.funTitle()}
          {this.funSubTitle()}
          {this.funImagePath()}
        </div>
        <div>
          {this.funSinopse()}
          {this.funRaiting()}
          {this.funSelect()}
        </div>
        <button type="submit" onSubmit={this.submit}>Adicionar filme</button>
      </form>
    );
  }
}
