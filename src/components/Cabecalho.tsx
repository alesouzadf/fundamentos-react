interface CabecalhoProps {
    className?: string
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    return(
        <div className={`
            flex flex-col justify-center px-8
            ${props.className} ?? ''
        `}>
            <h1 className="text-2xl font-black">{props.titulo}</h1>
            <h2 className="text-sm text-zinc-500">{props.subtitulo}</h2>
        </div>
    )
}