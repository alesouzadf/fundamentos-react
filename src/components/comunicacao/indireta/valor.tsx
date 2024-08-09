import { useState } from "react"
import Botoes from "./botoes"

export default function Valor(){
    const [nome, setNome] = useState('Valor')

    function alterar(nome: string){
        setNome(nome)
    }

    return(
        <div className="text-8xl font-black">
            <span className="flex gap-5">{nome}</span>
            <Botoes alterarNome={alterar}/>
        </div>
    )
}