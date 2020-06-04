/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class AddMovie extends Component {
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

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(event) {
    const input = event.target;
    this.setState({ name: input.value });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <div>
              <label htmlFor="inputAddMovie">
                Título
                <input type="text" name="name" maxLength="50" value={this.state.name} />
              </label>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AddMovie;
