import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {


  return (
    <div className="App" >
      <MercadoLibre />
    </div>
  );
}

export default App;
