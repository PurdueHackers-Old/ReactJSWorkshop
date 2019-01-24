import { CONFIG } from '../config';
import { IBook, ICreateBook } from '../interfaces';

export const fetchBooks = async () => {
	const { response: books }: { response: IBook[] } = await fetch(
		`${CONFIG.SERVER_URL}/api/books`
	).then(res => res.json());
	return books;
};

export const fetchBook = async (id: number | string) => {
	const { response: book }: { response: IBook } = await fetch(
		`${CONFIG.SERVER_URL}/api/books/${id}`
	).then(res => res.json());
	return book;
};

export const deleteBook = async (id: number | string) => {
	const { response: book }: { response: IBook } = await fetch(
		`${CONFIG.SERVER_URL}/api/books/${id}`,
		{
			method: 'DELETE'
		}
	).then(res => res.json());
	return book;
};

export const createBook = async (body: ICreateBook) => {
	const { response: book }: { response: IBook } = await fetch(
		`${CONFIG.SERVER_URL}/api/books/`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	).then(res => res.json());
	return book;
};

export const updateBook = async (id: number | string, body: ICreateBook) => {
	const { response: book }: { response: IBook } = await fetch(
		`${CONFIG.SERVER_URL}/api/books/${id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
	).then(res => res.json());
	return book;
};
