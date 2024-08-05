import { useState } from 'react';

import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from '@tabler/icons-react';

export default function PaginaComEstado(){
    const [numero, setNumero] = useState(0)
    const [delta, setDelta] = useState(0)

    function acrescentar(){
        setNumero(numero + delta)
    }

    function decrementar(){
        if(numero > 0) {
            setNumero(numero - delta)
        }
    }

    function acrescentarDelta(){
        setDelta(delta + 1)
    }

    function decrementarDelta(){
        if(delta > 0) {
            setDelta(delta - 1)
        }
    }

    return(
        <Pagina titulo="Com Estado" subtitulo="Capítulo Estado">
            <div className='flex flex-col justify-center items-center h-full w-full gap-5'>
                <div className='text-white text-7xl font-black'>
                    <div>{numero}</div>
                </div>
                <div className='flex gap-5'>
                    <button onClick={decrementar} className={`
                        bg-blue-500 p-2
                        rounded-full`}>
                        <IconMinus size={30} />   
                    </button>
                    <button onClick={acrescentar} className={`
                        bg-blue-700 p-2
                        rounded-full`}>
                        <IconPlus size={30} />
                    </button>
                </div>
                <div className='flex gap-4'>
                    <button onClick={decrementarDelta} className={`
                       justify-center items-center w-ful h-full
                        bg-purple-500 p-2
                        rounded-full`}>
                        <IconMinus size={16} />   
                    </button>
                    <span>{delta}</span>
                    <button onClick={acrescentarDelta} className={`
                        justify-center items-center w-ful h-full
                        bg-purple-700 p-2
                        rounded-full`}>
                        <IconPlus size={16} />
                    </button>
                </div>
            </div>
        </Pagina>
    )
}