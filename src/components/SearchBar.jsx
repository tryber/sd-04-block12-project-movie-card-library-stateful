// implement SearchBar component here
import React from 'react';

const createInputField = (id, label, type, value, checked, onChange) => (
  <label htmlFor={id}>
    {label}
    {type === 'checkbox' ? (
      <input id={id} type={type} checked={checked} onChange={onChange} />
    ) : (
      <input id={id} type={type} value={value} onChange={onChange} />
    )}
  </label>
);

const createSelectField = (id, label, value, onChange) => {
  const options = [
    { v: '', t: 'Todos' },
    { v: 'action', t: 'Ação' },
    { v: 'comedy', t: 'Comédia' },
    { v: 'thriller', t: 'Suspense' },
  ];
  return (
    <label htmlFor={id}>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((o, i) => (
          <option key={i} value={o.v}>
            {o.t}
          </option>
        ))}
      </select>
    </label>
  );
};

const SearchBar = props => {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form>
      {createInputField(
        'search-bar-input',
        'Inclui o texto:',
        'text',
        searchText,
        false,
        onSearchTextChange,
      )}
      {createInputField(
        'search-bar-checkbox',
        'Mostrar somente favoritos',
        'checkbox',
        false,
        bookmarkedOnly,
        onBookmarkedChange,
      )}
      {createSelectField(
        'search-bar-select',
        'Filtrar por gênero',
        selectedGenre,
        onSelectedGenreChange,
      )}
    </form>
  );
};

export default SearchBar;
