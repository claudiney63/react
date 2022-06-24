/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react' //aqui eu importo a biblioteca react

export default function App() { //na mesma linha eu ja mando importar
  return ( //eu só posso retornar um componente
    //todos os componentes precisam está em um unico só
    //não posso ter tags não finalizadas
    <>
    <p> Estudos de React</p>
    <br/>
    <p> Primeiro dia de Estudo</p>
    </>
  )
}
