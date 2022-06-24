import React from 'react'
import Dados from './Dados'

export default function Corpo() {

    const dia = '24'
    const mes = 'junho'
    const ano = '2022'
    
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Vamos Estudar</p>
            <Dados
                dia={dia}
                mes={mes}
                ano={ano}
            />
        </section>
    )
}