import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="input-group">
						<input type="text" className="form-control" />
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button">Add Todo</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
