import React, { FormEvent, ChangeEvent } from 'react';

type Props = {
	onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	title: string;
	author: string;
};

export default function BookForm({ onSubmit, onChange, title, author }: Props) {
	return (
		<form onSubmit={onSubmit}>
			<label>
				Title: <input name="title" value={title} onChange={onChange} />
			</label>
			<br />
			<label>
				Author: <input name="author" value={author} onChange={onChange} />
			</label>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
}
