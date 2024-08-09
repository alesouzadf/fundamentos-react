interface BotoesProps {
    alterarNome(nome:string): void
}

export default function Botoes(props: BotoesProps){
    return(
        <div className="flex gap-5">
            <button className="botao" onClick={() => props.alterarNome('Alice')}>Alice</button>
            <button className="botao" onClick={() => props.alterarNome('Davi')}>Davi</button>
            <button className="botao" onClick={() => props.alterarNome('Pedro')}>Pedro</button>
        </div>
    )
}