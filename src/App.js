import React, { Component } from 'react';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Pizza from './components/Pizza';

import { saveState, loadState } from './functions/passwordState'
const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Pizza/>
      </div>
    </Provider>
  );
}

export default App;