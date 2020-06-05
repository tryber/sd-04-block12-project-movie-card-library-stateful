// implement AddMovie component here
import React, { Component } from 'react';
import Inputs from './form/Inputs';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
}


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeHandle = ({ target: { value } }, name) => {
    this.setState({
      [name]: value
    });
  }

  onClickHandle = () => {
    this.props.onClick(this.state);
    this.setState(initialState);
  }

  render() {
    return (
      <form>
        <Inputs state={this.state} onChange={this.onChangeHandle} />
        <label htmlFor="genre">Gênero
          <select name="genre" value={this.state.genre} onChange={(e) => this.onChangeHandle(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={this.onClickHandle}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
