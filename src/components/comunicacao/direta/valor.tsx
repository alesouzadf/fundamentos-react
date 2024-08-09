interface ValorProps {
    texto: string
}

export default function Valor(props: ValorProps){
    return (
        <div className="text-8xl bg-yellow-600 rounded-md font-black">
            {props.texto}
        </div>
    )
}