import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreateBookPage from './pages/CreateBook';
import EditBookPage from './pages/EditBook';
import BooksPage from './pages/Books';
import BookPage from './pages/Book';
import HomePage from './pages/Home';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<br />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/book/:id/edit" component={EditBookPage} />
					<Route exact path="/book/:id" component={BookPage} />
					<Route exact path="/books/create" component={CreateBookPage} />
					<Route exact path="/books" component={BooksPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
