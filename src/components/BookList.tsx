import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { IBook } from '../types';

const BooksList = ({ books }: { books: IBook[] }) => {
	return (
		<div>
			{books.map((book: IBook) => (
				<div key={book.id}>
					<Link to={`/books/${book.id}`} className="App-link">
						<Book book={book} />
					</Link>
					<hr />
				</div>
			))}
		</div>
	);
};

export default BooksList;
