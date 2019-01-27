import React, { Component } from 'react';
import './App.css';
import BooksPage from './containers/Books';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<BooksPage />
				</header>
			</div>
		);
	}
}

export default App;
