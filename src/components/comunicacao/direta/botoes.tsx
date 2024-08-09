import { useState } from "react"
import Valor from "./valor"

export default function Botoes(){
    const [nome, setNome] = useState('')
    return (
        <div className="flex flex-col bg-green-600 gap-5">
            <div className="flex gap-5">
                <button className="botao" onClick={() => setNome('Alê')}>Alê</button>
                <button className="botao" onClick={() => setNome('Paula')}>Paula</button>
                <button className="botao" onClick={() => setNome('Alice')}>Alice</button>
            </div>
            <Valor texto={nome}/>
        </div>        
    )
}