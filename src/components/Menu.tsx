import { Icon360View, IconAB, IconArrowMoveDown, IconArrowMoveUp, IconBabyBottle, IconCalculatorFilled, IconCode, IconForms, IconHome, IconTie } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return (
        <div className={`
            flex flex-col justify-start w-72
            text-3xl gap-2 p-2 
        `}>
            <span className="text-sm text-zinc-500  pl-3 pt-4 ">Comunicação</span>
            <MenuItem icone={<IconArrowMoveDown />} texto="Comunicação Direta" url="/comunicacao/direta"/>
            <MenuItem icone={<IconArrowMoveUp />} texto="Comunicação Indireta" url="/comunicacao/indireta"/>

            <span className="text-sm text-zinc-500  pl-3 pt-4 ">Estado</span>
            <MenuItem icone={<IconCode />} texto="Componente com estado" url="/estado/com"/>
            <MenuItem icone={<IconForms />} texto="Campo Texto" url="/estado/campoTexto"/>
            <MenuItem icone={<IconCalculatorFilled />} texto="Desafio Calculadora" url="/estado/desafioCalculadora"/>

            <span className="text-sm text-zinc-500  pl-3 pt-4 ">Componente</span>
            <MenuItem icone={<IconBabyBottle />} texto="Básico" url="/componente/basico"/>
            <MenuItem icone={<IconTie />} texto="Titulo" url="/componente/titulo"/>
            <MenuItem icone={<IconAB />} texto="Trecho" url="/componente/trecho"/>
            
            <span className="text-sm text-zinc-500  pl-3 pt-4 ">Fundamentos</span>
            <MenuItem icone={<IconHome />} texto="Pagina #1" url="/fundamentos/pagina"/>
            <MenuItem icone={<Icon360View />} texto="Pagina #2" url="/pagina"/>
        </div>
    )
}