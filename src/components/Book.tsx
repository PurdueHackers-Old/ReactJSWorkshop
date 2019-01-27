import React from 'react';
import { IBook } from '../types';

const BookComponent = ({ book }: { book: IBook }) => {
	return (
		<div>
			<h3>Id: {book.id}</h3>
			<h3>Title: {book.title}</h3>
			<h3>Author: {book.author}</h3>
		</div>
	);
};

export default BookComponent;
