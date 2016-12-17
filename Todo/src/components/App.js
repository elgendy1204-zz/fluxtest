import React, { Component } from 'react';
import Body from './Body';
import Header from './Header';
import '../css/App.css';
import AppStore from '../stores/appStore';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			todos : AppStore.getAll()
		};
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		AppStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	}

	render() {
		return (
			<div className='container'>
				<Header />
				<Body {...this.state}/>
			</div>
		);
	}

	_onChange() {
		this.setState({todos: AppStore.getAll()});
	}
}

export default App;
