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
        this.setState({ ligado: !(this.state.ligado) })
    }

    render() {
        return (
            <>
                <p>Marca do Carro: {this.props.marca}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <button onClick={() => this.ligarEDesligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'} </button>
            </>
        )
    }
}