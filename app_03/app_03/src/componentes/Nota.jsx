export default function Nota(props) {
    return (
        <>
            <legend>Informe a nota: {props.num}</legend>
            <input
                type='text'
                value={props.nota}
                onChange={(e) => props.setNota(parseFloat(e.target.value))} />
        </>
    )
}