import React, {useState} from "react";
import Globais from "./Globais";

export default function Info() {

    const [nome, setNome] = useState(Globais.nome)

    const mudarNome = () => {
        Globais.nome = nome
    }

    const verNome = () => {
        alert(Globais.nome)
    }

    return (
        <>
            <p>{'Nome: ' + Globais.nome}</p>
            <p>{'Idade: ' + Globais.idade}</p>
            <p>{'Curso: ' + Globais.curso}</p>
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)}></input><br/>
            <button onClick={() => mudarNome()}>Mudar Nome</button> <br/>
            <button onClick={() => verNome()}>Ver Nome</button>
        </>
    )
}