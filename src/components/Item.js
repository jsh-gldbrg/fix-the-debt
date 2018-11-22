import React, { Component } from 'react';
import { SubItem } from './SubItem';
import './Item.css';

export class Item extends Component {
	constructor(){
		super();
		this.state = {
			expanded:false
		}
		this.handleExpand = this.handleExpand.bind(this);
	}

	handleExpand(){
		this.setState(prevState => ({
			expanded: !prevState.expanded
		  }));
	}

	render() {
		const subs = this.props.subs;
		let subContainer, subItems, icon;

		if (subs.length){
			subItems = subs.map((label, i) =>
			<SubItem
				key={i}
				index={i}
				left={label.category}
				right={label.amount}
			/>);
			subContainer = <div className="sub-items">{subItems}</div>;
			icon = <div className={this.state.expanded ? "icon-collapse":"icon-expand"}></div>;
		}
		return (
			<div className={this.state.expanded ? 'Item-expand': 'Item'} onClick={this.props.subs.length ? this.handleExpand: null}>
				<div className={this.props.subs.length ? "col-left" : "col-left-no-icon"}>
				{icon}
				{this.props.left}
				</div>
				<div className="col-right">
				{this.props.right}
				</div>
				{subContainer}
			</div>
		)
	}
}