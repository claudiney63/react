import React from 'react'

export default function Dados(props) {
    return (
        <section>
            <p>Soma: {props.soma}</p>
            <p>Dia: {props.dia}</p>
            <p>Mêa: {props.mes}</p>
            <p>Ano: {props.ano}</p>
        </section>
    )
}