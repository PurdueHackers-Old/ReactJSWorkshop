import React, { Component } from 'react';
import './App.css';
import BooksPage from './containers/Books';

class App extends Component {
	render() {
		return (
			<div className="App App-header">
				<BooksPage />
			</div>
		);
	}
}

export default App;
