import React from 'react';

class SearchCheckbox extends React.Component {
  render() {
    const { checked, handleChange } = this.props;
    return (
      <label htmlFor="bookmarked">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="bookmarked"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default SearchCheckbox;
