import { useState } from 'react';
/*import Led from './componentes/Led'

export default function App() {

  const [ligado, setLigado] = useState(false)

  const cancelar = (obj) => { //serve para cancelar algum evento padrão de algum elemento
    return obj.preventDefault()
  }

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado} />
      <br/>
      <a
        href='https://www.google.com'
        target='_blank'
        onClick={(e) => cancelar(e)}
      >
        google.com
      </a>
    </>
  );
}*/



/*
export default function App() {

  const [log, setLog] = useState(false)

  const msgLogin = () => {
    return 'Usuario logado'
  }

  const msgLogout = () => {
    return 'Por favor logar'
  }

  const comprimento = () => {
    const hora = new Date().getHours()
    if(hora >= 0 && hora < 13) {
      return <p>Bom dia</p>

    } else if(hora >= 13 && hora < 18) {
      return <p>Boa tarde</p>

    } else {
      return <p>Boa noite</p>
    }
  }

  return ( //dentro de um onClick, para mudar o estado, eu uso o metodo, dentro de uma função, para que possamos chama-la corretamente
    <>
      {comprimento()}
      <p>{log ? msgLogin() : msgLogout()}</p>
      <button onClick={() => setLog(!log)}>{log ? 'LogOut' : 'LogIn'}</button>
    </>
  )
}
*/

/*
export default function App() {

  const [cor, setCor] = useState(1)

  const retornaCor = (c) => {
    if (c == 1) {
      return {color: 'red'}
    } else if (c == 2) {
      return {color: 'green'}
    } else {
      return {color: 'blue'}
    }
  }

  const mudaCor = () => {
    setCor(cor + 1)
    if(cor > 2) {
      setCor(1)
    }
  }

  //setInterval(mudaCor, 1200)

  return (
    <>
      <h1 style={retornaCor(cor)}>Hello world</h1>
      <button onClick={() => mudaCor()}>Muda Cor</button>
    </>
  )
}
*/

/*
export default function App() {

  const carros = [
    {categoria: "Esporte", preco: "120000.00", modelo: "Gof GIT"},
    {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
    {categoria: "Esporte", preco: "78000.00", modelo: "Hilux"},
    {categoria: "Utilitario", preco: "180000.00", modelo: "Ranger"},
    {categoria: "SUV", preco: "60000.00", modelo: "Camaro"},
  ]

  const carrosMap = carros.map(
    (c, i) =>
      <li key={i}>Preço: R$ {c.preco} - Categoria: {c.categoria} / Modelo: {c.modelo}</li>
  )

  return (
    <>
      <ul>{carrosMap}</ul>
    </>
  )
}
*/

export default function App() {

  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('Camaro')

  const randomName = (e) => {
    setNome(e.target.value)
  }

  return ( //'e' como parametro consigo pegar o elemento value do input
    <>
      <label>Digite seu nome: </label>
      <input type='text' name='fnome' value={nome} onChange={(e) => randomName(e)}/>
      <p>Nome digitado: { nome }</p>
     
      <label>Selecione um carro: </label>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="Golf">Golf</option>
        <option value="Toro">Toro</option>
        <option value="Camaro">Camaro</option>
      </select>
      <p>Carro Selecionado: {carro} </p>
    </>
  )
}