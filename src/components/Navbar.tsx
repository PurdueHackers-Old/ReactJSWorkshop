import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<Link to="/">Home</Link> | <Link to="/books">Books</Link> |{' '}
				<Link to="/books/create">Create Book</Link>
			</nav>
		);
	}
}
