import axios from 'axios';
import { CONFIG } from '../config';
import { IBook, ICreateBook } from '../types';
const { SERVER_URL } = CONFIG;

const api = axios.create({
	baseURL: SERVER_URL
});

export const fetchBooks = async (): Promise<IBook[]> => {
	try {
		const { data } = await api.get('/api/books');
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};

export const fetchBook = async (id: number | string): Promise<IBook> => {
	try {
		const { data } = await api.get(`/api/books/${id}`);
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};

export const deleteBook = async (id: number | string): Promise<IBook> => {
	try {
		const { data } = await api.delete(`/api/books/${id}`);
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};

export const createBook = async (body: ICreateBook): Promise<IBook> => {
	try {
		const { data } = await api.post(`/api/books/`, body);
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};

export const updateBook = async (
	id: number | string,
	body: ICreateBook
): Promise<IBook> => {
	try {
		const { data } = await api.put(`/api/books/${id}`, body);
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};
