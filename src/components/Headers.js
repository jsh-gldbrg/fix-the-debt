import React, { Component } from 'react';
import './Headers.css';

export class Headers extends Component {
	render() {
		return (
			<div className="Headers">
				<div className="header-left">
				{this.props.left}
				</div>
				<div className="header-right">
				{this.props.right}
				</div>
			</div>
		);
	}
}
