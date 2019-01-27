import React, { Component } from 'react';
import './App.css';
import BooksPage from './containers/Books';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/Home';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<div className="App App-header">
				<Navbar />
				<br />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/books" component={BooksPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
