import React, { Component } from 'react';
import './ToggleButton.css';

export class ToggleButton extends Component {

    click = () => {
		this.props.clickHandler();
    }
    
	render() {
		return <div className="ToggleButton" onClick={this.click}>{this.props.label}</div>;
	}
}