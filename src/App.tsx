import React, { Component } from 'react';
import './App.css';
import BooksPage from './containers/Books';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/Home';
import Navbar from './components/Navbar';
import BookPage from './containers/Book';
import CreateBookPage from './containers/CreateBook';
import EditBookPage from './containers/EditBook';

class App extends Component {
	render() {
		return (
			<div className="App App-header">
				<Navbar />
				<br />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/books/create" component={CreateBookPage} />
					<Route exact path="/books/:id/edit" component={EditBookPage} />
					<Route exact path="/books/:id" component={BookPage} />
					<Route exact path="/books" component={BooksPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
