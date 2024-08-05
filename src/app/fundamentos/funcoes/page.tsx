export default function Page(){

    function renderizarTitulo(){
        return (
            <div>
                <div>Título</div>
                <div>Subtítulo</div>
            </div>
        )
    }

    function renderizarConteudo(){
        return(
            <div>
                <ul>
                    <li>Zico</li>
                    <li>Adriano</li>
                    <li>Pet</li>
                </ul>
            </div>
        )
    }

    return(
        <div>
            {renderizarTitulo()}
            <hr />
            {renderizarConteudo()}
        </div>
    )
}