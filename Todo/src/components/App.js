import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import '../css/App.css';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<Header />
				<Body />
			</div>
		);
	}
}

export default App;
