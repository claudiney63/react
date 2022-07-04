import { useState } from "react"

export default function App() {

  const [nome, setNome] = useState('')

  const armazenar = (key, value) => {
    localStorage.setItem(key, value)
  }

  const consultar = (key) => {
    alert(localStorage.getItem(key))
  }

  const remover = (key) => {
    localStorage.removeItem(key)
  }

  return (
    <>
      <label>Informe um valor: </label><br/>
      <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}></input><br/>
      <button onClick={() => armazenar('lc_nome', nome)}>Guardar</button>
      <button onClick={() => consultar('lc_nome')}>Consultar</button>
      <button onClick={() => remover('lc_nome')}>Remover</button>
    
    </>
  )
}