import React, { Component } from 'react';
import { Item } from './Item';
import { Headers } from './Headers';
import './ItemsContainer.css';

export class ItemsContainer extends Component {

	stripAndReplaceComma(str){
		let stripped = parseInt(str.replace(/,/g, ''), 10);
		let multiplied = stripped * this.props.index;
		return multiplied.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render() {
		const items = this.props.data.map((label, i) =>
            <Item
                key={i}
                index={this.props.index}
				left={label.category}
				right={this.props.index === 0 ? ("$" + label.amount):"$" + this.stripAndReplaceComma(label.amount)}
				subs={label.subs}
				leftIndent={this.props.leftIndent}
            />);
		return (
			 <div className="ItemsContainer">
				<Headers 
					 left={this.props.leftColumnHeader} 
					 right={this.props.rightColumnHeader}
				/>
				{items}
			 </div>
		)
	}
}
