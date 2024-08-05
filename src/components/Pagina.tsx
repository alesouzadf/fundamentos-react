import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";
import AreaLateral from "./AreaLateral";

interface PaginaProps {
    titulo: string
    subtitulo: string
    children: any
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex h-screen">
      <AreaLateral />
      <div className="flex flex-1 flex-col">
        <Cabecalho 
            titulo={props.titulo} 
            subtitulo={props.subtitulo}
            className="h-16 bg-zinc-900 border-b border-zinc-800" 
        />
        <Conteudo>{props.children}</Conteudo>
        <Rodape
          textoEsq="Feito com 😎 em Brasília"
          textoDir={`Desenvolvido em ${new Date().getFullYear()}`}
        />
      </div>
    </div>
  );
}
