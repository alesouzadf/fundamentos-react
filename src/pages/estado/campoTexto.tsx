import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto(){
    const [valor , setValor] = useState('')

    function alterar(){
        setValor(`${Math.random()}`)
    }

    function capturaTexto(e: any){
        setValor(e.target.value)
    }

    return (
        <Pagina titulo="Campo de Texto" subtitulo="Captítulo de Estado">
            <div className="flex flex-col items-start gap-5">
                <input
                    type="text"
                    className="campo"
                    value={valor}
                    onChange={capturaTexto}
                />
                <button className="botao" onClick={alterar}>
                    Alterar
                </button>
                <span>{valor}</span>
            </div>
        </Pagina>
    )
}