import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0,
    }
  }

  // <button onClick={() => this.updateCounter('INCREMENT')}> + </button>

  updateCounter = (type) => {
    switch (type) {
      case 'INCREMENT':
        console.log("Going to increment")
        return this.setState(state => {
          return {
            count: state.count + 1,
          }
        })
      case 'DECREMENT':
        console.log("Going to decrement")
        return this.setState(state => {
          return {
            count: state.count - 1,
          }
        })
      default:
        return this.state;
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Counter and Toggle - Update</h2>
          <button onClick={() => this.updateCounter('INCREMENT')}>+ </button>
          <button onClick={() => this.updateCounter('DECREMENT')}> - </button>
          <div> {this.state.count}</div>

        </div>
      </div>
    );
  }
}

export default App;
