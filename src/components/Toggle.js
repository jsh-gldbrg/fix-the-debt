import React, { Component } from 'react';
import { ToggleButton } from './ToggleButton';
import './Toggle.css';

export class Toggle extends Component {
	
	render() {
		return (
            <div className="Toggle">
                <ToggleButton clickHandler={this.props.clickHandler} label={this.props.label}/>
            </div>
        )
	}
}