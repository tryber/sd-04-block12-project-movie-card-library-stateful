import React from 'react';

class SelectField extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genreInput">
        Gênero
        <select
          name="genre"
          id="genreInput"
          value={genre}
          onChange={handleChange}
        >
          <option value="action" text="Ação">
            Ação
          </option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectField;
