import React, { Component } from 'react';
import '../css/body.css';

class Body extends Component {
	render() {
		return (
			<section>
				<div className="row">
					<div className="col-md-12">
						<ul className="list-group">
							<li className="list-group-item">
								Cras justo odio
								<button type="button" className="btn btn-danger delete">X</button>
							</li>
							<li className="list-group-item">
								Dapibus ac facilisis
								<button type="button" className="btn btn-danger delete">X</button>
							</li>
							<li className="list-group-item">
								Morbi leo risus
								<button type="button" className="btn btn-danger delete">X</button>
							</li>
							<li className="list-group-item">
								Porta ac consectetur
								<button type="button" className="btn btn-danger delete">X</button>
							</li>
							<li className="list-group-item">
								Vestibulum at eros
								<button type="button" className="btn btn-danger delete">X</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Body;
