export default function Nota(props) {
    return (
        <>
            <legend>Informe a nota: {props.num}</legend>
            <input
                type='text'
                value={props.nota}
                name={props.nome}
                onChange={(e) => props.setNota(e)} />
        </>
    )
}