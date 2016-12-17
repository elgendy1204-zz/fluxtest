import React, { Component } from 'react';
import appActions from '../actions/appActions.js';

class Header extends Component {
	constructor(props){
		super(props);
		this.addTodo = this.addTodo.bind(this);
	}


	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="input-group">
						<input type="text" className="form-control" ref={ (input) => { this.todoMessage = input; } } />
						<span className="input-group-btn">
							<button className="btn btn-primary" onClick={this.addTodo} type="button">Add Todo</button>
						</span>
					</div>
				</div>
			</div>
		);
	}

	addTodo(){
		appActions.addTodo(this.todoMessage.value);
	}


}

export default Header;
