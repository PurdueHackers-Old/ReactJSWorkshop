import React from 'react';

export default function BookForm({onSubmit, onChange, title, author}) {
	return (
		<form onSubmit={onSubmit}>
			<label>
				Title: <input name="title" value={title} onChange={onChange} />
			</label>
			<br />
			<label>
				Author:{' '}
				<input name="author" value={author} onChange={onChange} />
			</label>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
}
