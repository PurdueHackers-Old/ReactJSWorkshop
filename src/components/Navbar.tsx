import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<Link to="/" className="App-link">
					Home
				</Link>{' '}
				|{' '}
				<Link to="/books" className="App-link">
					Books
				</Link>{' '}
				|{' '}
				<Link to="/books/create" className="App-link">
					Create Book
				</Link>
			</nav>
		);
	}
}
