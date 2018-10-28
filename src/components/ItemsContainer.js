import React, { Component } from 'react';
import { Item } from './Item';
import { Headers } from './Headers';
import './ItemsContainer.css';

export class ItemsContainer extends Component {
	constructor() {
		super();
		this.state = {data:{}};
	}
	componentDidMount() {
		// $.ajax({
		// 	url: '/my-comments.json',
		// 	dataType: 'json',
		// 	success: (comments) => this.setState({data:})
		// });
	}
	render() {
		return (
			 <div className="ItemsContainer">
			 	<Headers left={"Spending Category"} right={"Total Spending (2017)"}/>
				<Item left={"Defense and Military Benefits"} right={"$807,813,000,000"}/>
			 </div>
		)
	}
}
