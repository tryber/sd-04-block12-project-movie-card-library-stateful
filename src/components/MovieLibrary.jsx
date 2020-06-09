import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
	constructor (props) {
		super(props);
		const { movies } =this.props;
		this.state = {
			searchText: '',
			bookmarkedOnly: false,
			selectedGenre: '',
			movies: movies,
		};
	}

	render() {
		return (
			<div>
				<SearchBar
					SearchBar=""
					onSearchTextChange=""
					bookmarkedOnly=""
					onBookmarkedChange=""
					selectedGenre=""
					onSelectedGenreChange=""
				/>
				<AddMovie onClick="" />
			</div>
		);
	}
}