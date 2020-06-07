import React from "react";

const BookMarked = ({ bookmarkedOnly, onBookmarkedChange }) => (
  <div>
    <input
      type="checkbox"
      name="bookmarkedOnly"
      checked={bookmarkedOnly}
      onChange={onBookmarkedChange}
    />
    <label htmlFor="bookmarkedOnly" />
    Mostrar somente favoritos
  </div>
);

export default BookMarked;
