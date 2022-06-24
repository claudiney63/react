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
/*import Naruto01 from './components/imgs/unnamed.png'
//eu dou nome a uma imagem e importo ela apartir do caminho em especifico

export default function App() { //na mesma linha eu ja mando importar

  const motivacao = () => {
    return "Vamos estudar, to sem criatividade"
  }

  const NOME = "Claudiney Ryan"
  const DIA = "24/06/2022"

  return ( //eu só posso retornar um componente
    //todos os componentes precisam está em um unico só
    //não posso ter tags não finalizadas

    //podemos importar diretamete uma imagem de fora do src,
    //apartir da pasta public, que está fora do app
    <>
      <header>
        <p>{'Estudos de React por ' + NOME}</p>
        <br />
        <p> Primeiro dia de Estudo ({DIA})</p>
        <br />
        <p>{motivacao()}</p>
      </header>
      <section>
        <img src={Naruto01} />
        <img src='/Uzumaki.Naruto.full.3623665.jpg' />
      </section>
    </>

  )
}*/

import Header from './components/Header'
import Corpo from './components/Corpo'

export default function App() {
  return (
    <>
      <Header/>
      <Corpo/>
    </>
  )
}
