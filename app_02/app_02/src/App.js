import { useState } from 'react';
import Led from './componentes/Led'

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
}

