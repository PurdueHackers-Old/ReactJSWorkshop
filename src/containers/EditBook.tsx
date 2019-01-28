import React, { Component, ChangeEvent, FormEvent } from 'react';
import { fetchBook, updateBook } from '../actions';
import { RouteComponentProps } from 'react-router-dom';
import BookForm from '../components/BookForm';

type Props = RouteComponentProps<{ id: string }>;

export default class EditBookPage extends Component<Props> {
	state = {
		title: '',
		author: '',
		loading: true
	};

	async componentDidMount() {
		try {
			const {
				match: {
					params: { id }
				}
			} = this.props;
			const book = await fetchBook(id);
			this.setState({ ...book, loading: false });
		} catch (error) {
			console.error('Error fetching books:', error);
			this.setState({ loading: false });
		}
	}

	onChange = (e: ChangeEvent<HTMLInputElement>) =>
		this.setState({ [e.target.name]: e.target.value });

	onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			const {
				match: {
					params: { id }
				},
				history: { push }
			} = this.props;
			const { title, author } = this.state;
			await updateBook(id, { title, author });
			push('/books');
		} catch (error) {
			console.error('Error updating book:', error);
		}
	};

	render() {
		const { loading, title, author } = this.state;
		if (loading) return <div>Loading...</div>;
		if (!loading && !title && !author) return <div>Book not found!</div>;
		return (
			<div>
				Update this book:
				<BookForm
					{...this.state}
					onSubmit={this.onSubmit}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
