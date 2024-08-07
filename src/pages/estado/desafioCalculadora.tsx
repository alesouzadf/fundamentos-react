import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function Calculadora(){
    const [campo1, setCampo1] = useState(0)
    const [campo2, setCampo2] = useState(0)

    function capturaCampo1(e: any){
        setCampo1(+e.target.value)
    }

    function capturaCampo2(e: any){
        setCampo2(+e.target.value)
    }

    return (
       <Pagina titulo="Desafio Calculadora" subtitulo="Capítulo Estado">
            <div className="flex flex-col justify-center gap-5">
                <div className="flex items-center gap-5">
                    <input 
                        type="number" 
                        className="campo"
                        value={campo1}
                        onChange={capturaCampo1}
                    />
                    <input 
                        type="number" 
                        className="campo"
                        value={campo2}
                        onChange={capturaCampo2}
                    />
                </div>
                <div className="flex flex-col">
                    <span>{campo1} + {campo2} = {campo1 + campo2}</span>
                    <span>{campo1} - {campo2} = {campo1 - campo2}</span>
                    <span>{campo1} * {campo2} = {campo1 * campo2}</span>
                    <span>{campo1} / {campo2} = {campo1 / campo2}</span>
                </div>
            </div>
       </Pagina>
    )
}