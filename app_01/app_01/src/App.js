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

//import React from 'react' //aqui eu importo a biblioteca react
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

/*
import Header from './components/Header'
import Corpo from './components/Corpo'
*/

/*
import './App.css'
import Relogio from './components/Relogio'

export default function App() {

  const txtDestaque = {
    color: 'blue',
    fontSize: '5rem',
  }

  return (
    <>
      <section className='caixa'>
        <Relogio/>
        <h1 style={{ color: 'red', fontSize: '3rem' }}>Olá Mundo</h1>
        <h2 style={txtDestaque}>Vamos estudar</h2>
        <p className='texto'>Estudando Estilização</p>
        <a href='https://www.google.com' target='_blank'>google.com</a>
      </section>
    </>
  )
}
*/

import React, {useState} from 'react'
import Contador from './components/Contador'

export default function App() {

  const [num, setNum] = useState(10)

  let n1 = 10
  n1 = 34

  //a variavel apenas, não é rederizada na tela, por exemplo o botão ali
  //para isso usamos o useState

  //passo os valores dos parametros que desejo

  return (
    <>
      <p>Valor da variavel: {n1}</p>
      <button onClick={(n1) => n1++}>Somar</button> 
      <br/>
      <Contador num={num} setNum={setNum}/>
    </>
  )
}
