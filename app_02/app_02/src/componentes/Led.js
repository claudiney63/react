import { useState } from 'react'
import led_vermelho from './imgs/vermelho.jpg'
import led_verde from './imgs/verde.jpg'

export default function Led(props) {

    return (
        <>
            <img style={{ width: '200px', height: '200px' }} src={props.ligado ? led_verde : led_vermelho} title='Vermelho/Desligar'></img>
            <br />
            <button onClick={() => props.setLigado(!props.ligado)}>{props.ligado ? 'Desligar' : 'Ligar'}</button>
        </>
    );
}