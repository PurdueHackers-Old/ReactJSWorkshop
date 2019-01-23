import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { IBook } from '../interfaces';

const BooksList: React.FunctionComponent<{ books: IBook[] }> = ({ books }) => {
	if (!books.length) return <div>No Books!</div>;
	else
		return (
			<div>
				{books.map((book: IBook) => (
					<div key={book.id}>
						<Link to={`/book/${book.id}`}>
							<Book book={book} />
						</Link>
						<hr />
					</div>
				))}
			</div>
		);
};

export default BooksList;
