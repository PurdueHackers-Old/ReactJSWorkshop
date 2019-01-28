import React, { Component } from 'react';
import { fetchBook, deleteBook } from '../actions';
import Book from '../components/Book';
import { RouteComponentProps, Link } from 'react-router-dom';
import { IBook } from '../types';

type BookProps = RouteComponentProps<{ id: string }>;
type BookState = { book: IBook | null; loading: boolean };

export default class BookPage extends Component<BookProps, BookState> {
	state = {
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
			console.error('Error fetching book:', error);
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
		return (
			<div>
				The book you are looking for:
				{book ? <Book book={book} /> : <div>Book not found!</div>}
				<Link to={`/books/${this.props.match.params.id}/edit`}>
					<button>Edit</button>
				</Link>
				<button onClick={this.onDelete}>Delete</button>
			</div>
		);
	}
}
