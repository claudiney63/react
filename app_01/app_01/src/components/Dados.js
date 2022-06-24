import React from 'react'

export default function Dados(props) {
    return (
        <section>
            <p>Dia: {props.dia}</p>
            <p>Mêa: {props.mes}</p>
            <p>Ano: {props.ano}</p>
        </section>
    )
}