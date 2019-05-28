import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers'

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Footer from './components/Footer'

/* REMEMBER TO ATTACH THE DEVTOOL */
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      count: 0,
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
        <Provider store={store}>
          <Counter />
          <Footer />
        </Provider>

      </div>                                                      
    </div>         
    );         
  }                  
}


export default App;
