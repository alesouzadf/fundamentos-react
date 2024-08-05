import Pagina from "@/components/Pagina";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Pagina titulo="Fundamentos React" subtitulo="Bem-vindos ao mundo React">
      <div className={`
        flex flex-col justify-center items-center 
        w-full h-full text-zinc-500
        `}>
        <IconBrandReact size={200} stroke={1}/>
        <span>Curso Fundamentos React</span>
        <span className="text-sm">Aqui aprenderá fundamentos sólidos da biblioteca React</span>
      </div>
    </Pagina>
  );
}
