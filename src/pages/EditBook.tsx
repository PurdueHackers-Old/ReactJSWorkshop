import React, { Component } from 'react';
import { fetchBook, deleteBook, updateBook } from '../actions';
import Book from '../components/Book';
import { RouteComponentProps } from 'react-router-dom';
import { IBook } from '../interfaces';
import BookForm from '../components/BookForm';

export default class EditBookPage extends Component<
	RouteComponentProps<{ id: string }>
> {
	state = {
		title: '',
		author: '',
		loading: true
	};

	async componentDidMount() {
		try {
			const {
				match: {
					params: { id }
				}
			} = this.props;
			const book = await fetchBook(id);
			this.setState({ ...book, loading: false });
		} catch (error) {
			console.error('Error fetching books:', error);
			this.setState({ loading: false });
		}
	}

	onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		this.setState({ [e.target.name]: e.target.value });

	onSubmit = async e => {
		try {
			e.preventDefault();
			const {
				match: {
					params: { id }
				},
				history: { push }
			} = this.props;
			const { title, author } = this.state;
			await updateBook(id, { title, author });
			push('/books');
		} catch (error) {
			console.error('Error updating book:', error);
		}
	};

	render() {
		const { loading, title, author } = this.state;
		if (loading) return <div>Loading...</div>;
		if (!loading && !title && !author) return <div>Book not found!</div>;
		return (
			<div>
				Update this book:
				<BookForm
					{...this.state}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
				/>
				{/* <form onSubmit={this.onSubmit}>
					<label>
						Title:{' '}
						<input name="title" value={title} onChange={this.onChange} />
					</label>
					<br />
					<label>
						Author:{' '}
						<input
							name="author"
							value={author}
							onChange={this.onChange}
						/>
					</label>
					<br />
					<input type="submit" value="Submit" />
				</form> */}
			</div>
		);
	}
}
