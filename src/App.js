import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter/Counter.js';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [show, setShow] = useState(true)

  const handleAdd = () => {
    /*console.log('se ejecuto')*/
  }

  return (
    <div className="App" >
      {/* <NavBar /> */}
      <ItemListContainer greeting='Hola Coders' />
      {/*<button onClick={() => setShow(!show)}>show/hide</button>*/}
      {/* { show && <Counter initial={10} stock={50} onAdd={handleAdd}/>} */}
    </div>
  );
}

export default App;
