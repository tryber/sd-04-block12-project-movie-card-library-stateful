import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="checkbox">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          name="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </div>
    );
  }
}
export default Checkbox;
