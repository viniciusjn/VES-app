import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

export function Banner() { 
    return (
        <div className="mb-10 lg:mb-17">
            <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[90vh] lg:justify-center lg:pb-12">
                <div className="absolute left-0 top-0 -z-10 flex h-[100vh] w-full flex-col bg-[black] overflow-hidden">

                    <Image
                        // src="/VES_banner.webp"
                        src="/VES_banner02.jpg"
                        alt="banner Vênus"
                        fill={true} 
                        className="opacity-30 object-cover"
                    />
                    <div className="absolute bottom-0 w-full h-70 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>   
                </div>       
                <h1 className="text-5xl font-bold md:text-7xl lg:text-9xl text-center">
                    Seja bem-vindo!
                </h1>
        
                <p className="text-shadow-md max-w-3xl text-lg md:text-xl lg:text-2xl text-center mx-auto">
                    Somos a <a className="text-yellow-500 font-bold">Vênus Energia Solar</a> e estamos aqui para revolucionar seu modo
                    de utilziar energia, faça seu orçamento e bora economizar!
                </p>

                <div className="flex space-x-3 justify-center">
                    <Link
                        href="https://youtu.be/4FVBDKL2xFk?si=-k8nYfKh61Wp-qlI"
                        target="_blank"
                        className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-500 px-5 py-1.5 text-sm font-semibold text-black transition md:px-8 md:py-2.5 hover:bg-[#035EFC] hover:text-white'>
                        <PlayIcon className='h-6' />
                        Quem somos?
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition md:px-8 md:py-2.5 hover:bg-[#035EFC] hover:text-white'>
                        <InformationCircleIcon className='h-6' />
                        Orçamento
                    </Link>
                </div>

            </div>

            
        </div>
    )
}