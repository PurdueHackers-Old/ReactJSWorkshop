import React from 'react';
import Book from './Book';
import { IBook } from '../types';

const BooksList = ({ books }: { books: IBook[] }) => {
	return (
		<div>
			{books.map(book => (
				<div key={book.id}>
					<Book book={book} />
					<hr />
				</div>
			))}
		</div>
	);
};

export default BooksList;
