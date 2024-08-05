import Pagina from "@/components/Pagina";

export default function PaginaSemEstado(){
    let numero = 0

    function acrescentar(){
        numero += 1
        console.log(numero)
    }

    return(
        <Pagina titulo="Sem Estado" subtitulo="Capítulo Estado">
            <div className='flex flex-col'>
                <div>Valor: {numero}</div>
                <button onClick={acrescentar} className='bg-blue-500 p-2'>Incrementar</button>
            </div>
        </Pagina>
    )
}