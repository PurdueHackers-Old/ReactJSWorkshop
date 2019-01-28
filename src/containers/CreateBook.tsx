import React, { Component, ChangeEvent, FormEvent } from 'react';
import { createBook } from '../actions';
import { RouteComponentProps } from 'react-router-dom';
import BookForm from '../components/BookForm';

export default class CreateBookPage extends Component<RouteComponentProps> {
	state = {
		title: '',
		author: ''
	};

	onChange = (e: ChangeEvent<HTMLInputElement>) =>
		this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
				<BookForm
					{...this.state}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
