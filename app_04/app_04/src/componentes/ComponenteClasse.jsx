import React from "react";

export default class ComponenteClasse extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Olá Mundo</h1>
                <p>Estudos de React por {this.props.nome + ' ' + this.props.sobrenome}</p>
            </>
        )
    }
}