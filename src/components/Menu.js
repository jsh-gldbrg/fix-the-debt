import React, { Component } from 'react';
import './Menu.css';
import { MenuButton } from './MenuButton';

export class Menu extends Component {

    state = { active: 0 };

    setActiveButton(index) {
        this.active = index;
    }

    handleButtonClick = index => {
        this.setState({ active: index });
    }

    componentDidUpdate() {
        //console.log(this.state.active);
    }

    render() {
        const data = ["OVERALL", "1", "2", "3", "4"];
        const buttons = data.map((label, i) =>
            <MenuButton
                key={i}
                index={i}
                label={label}
                enabled={i === this.state.active ? false : true}
                handleClick={this.handleButtonClick}
            />);
        return (
            <div className="Menu">
                {buttons}
            </div>
        );
    }
}
