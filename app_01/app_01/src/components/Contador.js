import React, { useState } from 'react'
import './Contador.css'

export default function Contador(props) {

    //coloco os parametros que irei receber atraves do props

    return (
        <section className='box'>
            <h1>{props.num}</h1>
            <button onClick={() => props.setNum(props.num+1)}> soma + 1 </button>
        </section>
    )
}