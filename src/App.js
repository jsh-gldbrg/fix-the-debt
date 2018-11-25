import React, { Component } from 'react';
import { Toggle } from './components/Toggle';
import { Menu } from './components/Menu';
import { ItemsContainer } from './components/ItemsContainer';
import './App.css';
import dataSpending from './spending.json';
import dataTaxBreak from './taxbreak.json'; 

class App extends Component {
  constructor(){
    super();
    this.state = { 
      active: 0,
      data:dataSpending
     };
    this.updateIndex = this.updateIndex.bind(this);
    this.toggleData = this.toggleData.bind(this);
  }

  updateIndex(index){
    this.setState({active: index});
  }

  toggleData(){
    if (this.state.data === dataSpending){
      this.setState({data:dataTaxBreak});
    } else{
      this.setState({data:dataSpending});
    }
  }

  shouldComponentUpdate(nextState) {
    let shouldUpdate = this.state.active !== nextState.active || this.state.data !== nextState.data;
    return shouldUpdate;
  }

  render() {
    return (
      <div className="App">
        <Toggle label={this.state.data.otherData + " >"} clickHandler={this.toggleData}/>
        <header className="App-header">
          <h1>{this.state.data.head}</h1>
          <h2>{this.state.data.subhead}</h2>
        </header>
        <Menu 
          index={this.state.active} 
          indexHandler={this.updateIndex}
        />
        <hr></hr>
        <ItemsContainer
          leftColumnHeader={this.state.data.leftColumnHeader}
          rightColumnHeader={this.state.data.rightColumnHeader}
          index={this.state.active}
          leftIndent={this.state.data !== dataTaxBreak ? true : false}
          data={this.state.active > 0 ? this.state.data.single : this.state.data.overall}
        />
      </div>
    );
  }
}

export default App;
