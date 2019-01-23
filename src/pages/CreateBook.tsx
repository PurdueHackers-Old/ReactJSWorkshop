import React, { Component } from 'react';
import { createBook } from '../actions';
import { RouteComponentProps } from 'react-router-dom';

export default class CreateBookPage extends Component<RouteComponentProps> {
	state = {
		title: '',
		author: ''
	};

	onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		this.setState({ [e.target.name]: e.target.value });

	onSubmit = async e => {
		e.preventDefault();
		const { title, author } = this.state;
		if (!title || !author) return;

		await createBook(this.state);
		this.props.history.push('/books');
	};

	render() {
		return (
			<div>
				Create a book:
				<form onSubmit={this.onSubmit}>
					<label>
						Title: <input name="title" onChange={this.onChange} />
					</label>
					<br />
					<label>
						Author: <input name="author" onChange={this.onChange} />
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
