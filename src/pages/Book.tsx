import React, { Component } from 'react';
import { fetchBook, deleteBook } from '../actions';
import Book from '../components/Book';
import { RouteComponentProps } from 'react-router-dom';
import { IBook } from '../interfaces';

export default class BookPage extends Component<
	RouteComponentProps<{ id: string }>
> {
	state: {
		book: IBook;
		loading: boolean;
	} = {
		book: null,
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
			this.setState({ book, loading: false });
		} catch (error) {
			console.error('Error fetching books:', error);
			this.setState({ loading: false });
		}
	}

	onDelete = async () => {
		try {
			const {
				match: {
					params: { id }
				},
				history: { push }
			} = this.props;
			await deleteBook(id);
			push('/books');
		} catch (error) {
			console.error('Error deleting book:', error);
		}
	};

	render() {
		const { book, loading } = this.state;
		if (loading) return <div>Loading...</div>;
		if (!book) return <div>Book not found!</div>;
		return (
			<div>
				The book you are looking for:
				<Book book={book} />
				<button onClick={this.onDelete}>Delete</button>
			</div>
		);
	}
}
