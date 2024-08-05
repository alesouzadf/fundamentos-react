interface RodapeProps{
    textoEsq: string
    textoDir: string
}

export default function Rodape(props: RodapeProps){
    return (
        <div className={`
            flex justify-between items-center
            h-16 text-base px-5
            bg-zinc-900 border-t border-zinc-800
            text-zinc-500
        `}>
            <p>{props.textoEsq}</p>
            <p>{props.textoDir}</p>
        </div>
    )
}