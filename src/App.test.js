import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieList from './components/MovieList';
// import Rating from './components/Rating';

describe('<App /> component', () => {
  it('renders a `Header` component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('renders a `MovieLibrary` component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('MovieLibrary').length).toEqual(1);
  });
});
