import React, { Component } from 'react';
import { fetchBooks } from '../actions';
import BooksList from '../components/BookList';

export default class BooksPage extends Component {
	state = {
		books: [],
		loading: true
	};

	async componentDidMount() {
		try {
			const books = await fetchBooks();
			this.setState({ books, loading: false });
		} catch (error) {
			console.error('Error fetching books:', error);
			this.setState({ loading: false });
		}
	}

	render() {
		const { books, loading } = this.state;
		if (loading) return <div>Loading...</div>;
		return (
			<div>
				The books page
				<br />
				Books:
				{books.length ? <BooksList books={books} /> : <div>No Books!</div>}
			</div>
		);
	}
}
