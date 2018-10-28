import React, { Component } from 'react';
import './Item.css';

export class Item extends Component {
	state = { expanded: false };
	
	render() {
		return (
			<div className="Item">
				<div className="col-left">
				<div className="icon icon-collapse"></div>
				{this.props.left}
				</div>
				<div className="col-right">
				{this.props.right}
				</div>
			</div>
		)
	}
}