import React from "react";

import FormIncludesText from "./FormIncludesText";
import FormBookmarkedOnly from "./FormBookmarkedOnly";
import FormSelectedGenre from "./FormSelectedGenre";

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <FormIncludesText
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
        <FormBookmarkedOnly
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
        />
        <FormSelectedGenre
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
