import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component {
	render() {
		return (
			<section>
				<div className="row">
					<div className="col-md-12">
						<ul className="list-group">
							{
								this.props.todos.map((todo, index) => {
									return (
											<li key={index} className="list-group-item">
												{todo.message}
												<button type="button" className="btn btn-danger delete">X</button>
											</li>
										);
								})
							}
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Body;
