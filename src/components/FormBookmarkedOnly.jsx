import React from "react";

class FormBookmarkedOnly extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="bookmarkedOnly">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="bookmarkedOnly"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }
}

export default FormBookmarkedOnly;
