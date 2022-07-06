import React, { useState } from "react";

export default class StateClasse extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ligado: false,
            velocidade: 0,
        }
    }

    ligarEDesligar() {
        //this.setState({ ligado: !(this.state.ligado) })

        //forma mais segura de chamar e atualizar o setState
        //pois as vezes acontece erros na chamada do setState
        this.setState (
            (state) => ({
                ligado: !state.ligado
            })
        )
    }

    acelerar() {
        //usar a função dentro de setState, pode otimizar o uso ]
        //de numeros na atualização da pagina
        this.setState(
            (state, props) => (
                {velocidade: state.velocidade + props.fator}
            )
        )
    }

    //os dois modelos de utilização são validos, se um der problema, pode usar o outro

    render() {
        return (
            <>
                <p>Marca do Carro: {this.props.marca}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <button onClick={() => this.ligarEDesligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'} </button><br/>

                <p>Velocidade: {this.state.velocidade}</p>
                <button onClick={() => this.acelerar()}> Acelerar </button>
            </>
        )
    }
}