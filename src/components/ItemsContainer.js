import React, { Component } from 'react';
import { Item } from './Item';
import { Headers } from './Headers';
import './ItemsContainer.css';
import dataSpending from '../spending.json'; 

export class ItemsContainer extends Component {
	constructor() {
		super();
		this.state = {
			overall:dataSpending.overall,
			single:dataSpending.single
		};
	}

	render() {
		const data = this.state.overall;
		const items = data.map((label, i) =>
            <Item
                key={i}
                index={i}
				left={label.category}
				right={label.amount}
				subs={label.subs}
            />);
		return (
			 <div className="ItemsContainer">
			 	<Headers left={"Spending Category"} right={"Total Spending (2017)"}/>
				{items}
			 </div>
		)
	}
}
