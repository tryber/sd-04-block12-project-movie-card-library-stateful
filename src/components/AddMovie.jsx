import React, { Component } from 'react';

export default class AddMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subtitle: '',
			title: '',
			imagePath: '',
			storyline: '',
			rating: 0,
			genre: 'action',
		};
	}

	funTitle() {
		return (
			<label htmlFor="searchText">
				Título
				<input type="text" value={this.state.title}
					onChange={(event) => this.setState({title:event.target.value})} 
				/>
			</label>
		);
	}

	funSubTitle() {
		return (
			<label htmlFor="searchText">
				Subtítulo
				<input type="text" value={this.state.subtitle}
					onChange={(event) => this.setState({subtitle:event.target.value})} 
				/>
			</label>
		);
	}

	render() {
		return (
			<form>
				{this.funTitle()}
				{this.funSubTitle()}
			</form>
		);
	}
}
