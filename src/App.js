import React from 'react'
import './App.css';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <ItemListContainer greeting='Hola Coders' />
      {/* <Counter initial={10} stock={10} title='Contador' /> */}
    </div>
  );
}

export default App;
