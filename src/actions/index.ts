import axios from 'axios';
import { CONFIG } from '../config';
const { SERVER_URL } = CONFIG;

const api = axios.create({
	baseURL: SERVER_URL
});

export const fetchBooks = async () => {
	try {
		const { data } = await api.post('/api/books');
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};

export const fetchBook = async (id: number | string) => {
	try {
		const { data } = await api.get(`/api/books/${id}`);
		return data.response;
	} catch (error) {
		throw error.response.data.error;
	}
};
