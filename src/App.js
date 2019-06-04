
// Import React
import React, { Component } from 'react';

// Import Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/'

// Import Middleware
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// App stuff
import logo from './logo.svg';
import './App.css';

// The counter component
import Counter from './components/Counter';


const sagaMiddleware = createSagaMiddleware()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// TODO -> We need to implement the Middleware here

//const store = createStore(
//  reducer, 
// devTools
//)
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), devTools)
);
//Apply mysaga -> use .run :(
sagaMiddleware.run(rootSaga)


class App extends Component {


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
          </Provider>

        </div>
      </div>
    );
  }
}

export default App;
