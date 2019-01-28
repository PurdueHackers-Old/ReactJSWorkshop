import React, { Component } from 'react';
import { fetchBook } from '../actions';
import Book from '../components/Book';
import { RouteComponentProps } from 'react-router-dom';
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

	render() {
		const { book, loading } = this.state;
		if (loading) return <div>Loading...</div>;
		return (
			<div>
				The book you are looking for:
				{book ? <Book book={book} /> : <div>Book not found!</div>}
			</div>
		);
	}
}
