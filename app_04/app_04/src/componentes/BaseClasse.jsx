import React from "react"

export default class BaseClasse extends React.Component{
    constructor(props) {
        super(props) //uso do props na classe pai

        //uso do state
        this.state = {
            aluno: "Claudiney",
            curso: "Ciencia da Computação",
            matriculado: true
        }

        //bindagem
        //let ad = this.ativoDesativo.bind(this)
    }

    //função de alteração pelo state
    ativoDesativo() {
        this.setState (
            state => ({
                matriculado: !state.matriculado
            })
        )
    }

    componentDidMount() {
        console.log('Componente criado!')
    }

    componentDidUpdate() {
        console.log('Componente atualizado!')
    }

    componentWillUnmount() {
        console.log('Componente removido')
    }

    render() {
        return (
            <>
            <p>{this.state.matriculado ? 'True' : 'False'}</p>
            <button onClick={() => {this.ativoDesativo()}}>Ativar/Desativar</button>
            </>
        )
    }
}