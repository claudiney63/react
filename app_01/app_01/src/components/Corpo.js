import React from 'react'
import Dados from './Dados'

export default function Corpo() {

    const somar = (x, y) => x+y
    const dia = () => { return '24' } //importando funções pelos componentes
    const mes = 'junho'
    const ano = '2022'

    return (
        <section>
            <h2>Curso de React</h2>
            <p>Vamos Estudar</p>
            <Dados
                soma = {somar(6, 8)}
                dia={dia()}
                mes={mes}
                ano={ano}
            />
        </section>
    )
}