import Pagina from '@/components/Pagina'

export default function PaginaTeste(){
    return (
        <Pagina titulo="Minha pagina App" subtitulo="Estou na pasta pages">
            <ul className='list-disc p-8'>
                <li>Davi</li>
                <li>Alice</li>
                <li>Pedro</li>
                <li>Gabigol</li>
            </ul>
        </Pagina>
    )
}