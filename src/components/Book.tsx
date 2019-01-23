import React from 'react';
import { IBook } from '../interfaces';

const BookComponent: React.FunctionComponent<{ book: IBook }> = ({ book }) => {
	return (
		<div>
			<h3>Title: {book.title}</h3>
			<h3>Author: {book.author}</h3>
		</div>
	);
};

export default BookComponent;
