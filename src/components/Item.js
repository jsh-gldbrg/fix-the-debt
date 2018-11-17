import React, { Component } from 'react';
import { SubItem } from './SubItem';
import './Item.css';

export class Item extends Component {
	constructor(){
		super();
		this.state = {
			expanded:false
		}
	}

	render() {
		const subs = this.props.subs;

		subs.length === 0 ? createSubItems : console.log('subs');

		return (
			<div className="Item">
				<div className="col-left">
				<div className="icon icon-collapse"></div>
				{this.props.left}
				</div>
				<div className="col-right">
				{this.props.right}
				</div>
				<div>
					
				</div>
			</div>
		)
	}
}