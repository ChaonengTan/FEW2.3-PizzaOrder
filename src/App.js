import React from 'react';
import './components/styles/App.css';
import data from './data.json'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Pizza from './components/Pizza';
import PizzaList from './components/PizzaList';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pizza data={data}/>
        <PizzaList/>
      </div>
    </Provider>
  );
}

export default App;