import React, { Component } from 'react';
import { fetchBooks } from '../actions';
import BooksList from '../components/BooksList';
import { IBook } from '../interfaces';

export default class BooksPage extends Component {
	state: {
		books: IBook[];
		loading: boolean;
	} = {
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
				<BooksList books={books} />
			</div>
		);
	}
}
