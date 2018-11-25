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
		this.handleExpandClassName = this.handleExpandClassName.bind(this);
	}

	handleExpand(){
		this.setState(prevState => ({
			expanded: !prevState.expanded
		  }));
	}

	handleExpandClassName(){
		if (!this.props.subs.length){
			return "Item";
		}
		if (this.state.expanded){
			return "Item-expand";
		} else{
			return "Item-collapse";
		}
	}

	render() {
		const subs = this.props.subs;
		let subContainer, subItems, icon, indentStyle;

		if (subs.length){
			subItems = subs.map((label, i) =>
			<SubItem
				key={i}
				left={label.category}
				right={this.props.index > 0 ? "$" + String(parseInt(label.amount) * this.props.index) : "$" + label.amount}
			/>);
			subContainer = <div className="sub-items">{subItems}</div>;
			icon = <div className={this.state.expanded ? "icon-collapse":"icon-expand"}></div>;
		}

		if (this.props.leftIndent) {
			if(this.props.subs.length){
				indentStyle = "col-left";
			}else{
				indentStyle = "col-left-no-icon";
			}
		} else{
			indentStyle = "col-left";
		}

		return (
			<div className={this.handleExpandClassName()} onClick={this.props.subs.length ? this.handleExpand: null}>
				<div className={indentStyle}>
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