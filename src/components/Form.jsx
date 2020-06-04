import React from 'react';
import Checkbox from './Checkbox';
import Search from './Search';
import Select from './Select';

class Form extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <Search
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
        <Checkbox
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
        />
        <Select
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
      </form>
    );
  }
}
export default Form;
