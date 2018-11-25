import React, { Component } from 'react';
import './MenuButton.css';

export class MenuButton extends Component {

    click = () => {
        this.props.handleClick(this.props.index);
    }
    
	render() {
		const className = this.props.enabled ? 'MenuButton' : 'MenuButton-disabled';
		return <div className={className} onClick={this.click}>{this.props.label}</div>;
	}
}
