import React from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <ItemListContainer greeting='Hola Coders' />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Titulo'>Comision 31865</h1>
        <p style={{backgroundColor: 'green'}}>
          Hola Coders
        </p>
        <button onClick={() => console.log('hice click')}>Mostrar mensaje en consola</button>
      </header> */}
      <Counter initial={10} stock={10} title='Contador' />
      {/* {React.createElement(Counter, { initial: 25, title: 'Contenedor 2'})} */}
    </div>
  );
}

export default App;
