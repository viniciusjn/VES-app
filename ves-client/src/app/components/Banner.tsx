import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

export function Banner() { 
    return (
        <div className="mb-10 lg:mb-17">
            <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[85vh] lg:justify-end lg:pb-12">
                <div className="absolute left-0 top-0 -z-10 flex h-[100vh] w-full flex-col bg-[black] overflow-hidden">

                    <Image
                        src="/VES_banner.webp"
                        alt="banner Vênus"
                        fill={true} 
                        className="opacity-50 object-cover"
                    />
                        
                </div>       
                <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                    Seja bem-vindo!
                </h1>
        
                <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                    Somos a Vênus Energia Solar e estamos aqui para revolucionar seu modo
                    de utilziar energia, faça seu orçamento e bora economizar!
                </p>

            </div>

            <div className="flex space-x-3">
                <Link
                    href="#"
                    target="_blank"
                    className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                    <PlayIcon className='h-6' />
                    Trailer
                </Link>
                <Link
                    href="#"
                    target="_blank">
                    <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
                        <InformationCircleIcon className='h-6' />
                        More Info
                    </button>
                </Link>
            </div>
        </div>
    )
}