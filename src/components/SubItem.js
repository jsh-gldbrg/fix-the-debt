import React, { Component } from 'react';
import './SubItem.css';

export class SubItem extends Component {
	render() {	
		return (
			<div className="SubItem">
				<div className="col-left-sub">
				{this.props.left}
				</div>
				<div className="col-right-sub">
				{this.props.right}
				</div>
			</div>
		)
	}
}