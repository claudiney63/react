/*import React, { useState } from 'react'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App() {

  const [notas, setNotas] = useState({nota1: '0', nota2: '0', nota3: '0', nota4: '0'})

  const mudaNotas = (e) => { //passa por parametro o elemento
    if(e.target.getAttribute('name') == 'nota1') { //pega o elemento e pode manipula-lo como quiser
      setNotas({nota1: e.target.value, nota2: notas.nota2, nota3: notas.nota3, nota4: notas.nota4})
    } else if (e.target.getAttribute('name') == 'nota2'){
      setNotas({nota1: notas.nota1, nota2: e.target.value, nota3: notas.nota3, nota4: notas.nota4})
    } else if (e.target.getAttribute('name') == 'nota3'){
      setNotas({nota1: notas.nota1, nota2: notas.nota2, nota3: e.target.value, nota4: notas.nota4})
    } else if (e.target.getAttribute('name') == 'nota4'){
      setNotas({nota1: notas.nota1, nota2: notas.nota2, nota3: notas.nota3, nota4: e.target.value})
    }
  }

  //atualiza apernas o campo modificado, o resto mantem o mesmo valor

  return (
    <>
      <Nota num={1} nota={notas.nota1} nome={'nota1'} setNota={mudaNotas} />
      <Nota num={2} nota={notas.nota2} nome={'nota2'} setNota={mudaNotas} />
      <Nota num={2} nota={notas.nota3} nome={'nota3'} setNota={mudaNotas} />
      <Nota num={2} nota={notas.nota4} nome={'nota4'} setNota={mudaNotas} />
      <Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)} />
    </>
  )
}
*/

/*
import Titulo from './componentes/Titulo'
import Texto from './componentes/Texto'

export default function App() {
  return (
    <Titulo>
      <Texto></Texto>
    </Titulo>
  )
}
*/

import { useEffect, useState } from "react"

//é um hook, assim que a pagina é chamada ou atualizada ele é chamado

export default function App() {

  const [contador, setCont] = useState(0)

  useEffect (
    () => {
      console.log('Pagina carregada')
      document.title = 'Contagem: '+contador
    }
  )

  return (
    <>
      <p>Contagem: {contador}</p>
      <button onClick={() => setCont(contador+1)}>Contar</button>
    </>
  )
}