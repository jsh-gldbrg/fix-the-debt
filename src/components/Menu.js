import React, { Component } from 'react';
import './Menu.css';
import { MenuButton } from './MenuButton';

export class Menu extends Component {
    handleButtonClick = index => {
        this.props.indexHandler(index);
    }

    render() {
        const data = ["OVERALL", "1", "2", "3", "4"];
        const buttons = data.map((label, i) =>
            <MenuButton
                key={i}
                index={i}
                label={label}
                enabled={i === this.props.index ? false : true}
                handleClick={this.handleButtonClick}
            />);
        return (
            <div className="Menu">
                {buttons}
            </div>
        );
    }
}
