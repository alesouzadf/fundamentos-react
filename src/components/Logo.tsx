import {  IconBrandReact } from "@tabler/icons-react"
import Link from 'next/link'

export default function Logo(){
    return(
        <Link href="/"className="flex items-center px-5 gap-5 font-black h-16 bg-purple-700">
            <IconBrandReact size={30} stroke={1}/>
            <span className="text-2xl">React</span>
        </Link>
    )
}