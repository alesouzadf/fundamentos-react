import Link from "next/link";

interface MenuItemProps {
    texto: string
    url: string
    icone: any
}

export default function MenuItem(props: MenuItemProps){
    return(
        <Link href={props.url} className={`
            flex items-center  w-full gap-5
            rounded-md px-4 p-2 text-base
            hover:bg-zinc-900
        `}>
            <span>{props.icone}</span>
            <span>{props.texto}</span>
            
        </Link>
    )
}