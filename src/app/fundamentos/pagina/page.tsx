"use client"

import Pagina from "@/components/Pagina";

export default function Page(){

    function executar(){
        console.log('O botão foi clicado!')
    }

    return (
        <Pagina titulo="Minha Aplicacao" subtitulo="A melhor pagina da web!">
            <button 
                onClick={executar}
                className="bg-blue-500 rounded-md p-5"
            >
                Entrar
            </button>
        </Pagina>

    )
}