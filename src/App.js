import React from 'react';
import './components/styles/App.css';
import data from './data.json'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Pizza from './components/Pizza';
import PizzaList from './components/PizzaList';
import Header from './components/Header';
import Footer from './components/Footer';

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className='content'>
          <Pizza data={data}/>
          <PizzaList/>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;