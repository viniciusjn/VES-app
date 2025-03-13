import Image from "next/image";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Banner() { 

    const whatsappNumber = "5532999701993";
    const whatsappMessage = "Olá! Gostaria de mais informações sobre um orçamento.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    return (
        <div className="mb-10 lg:mb-17">
            <div className="flex flex-col items-center justify-center space-y-4 py-16 md:space-y-4 h-[100vh] lg:pb-12">
                <div className="absolute left-0 top-0 -z-10 flex h-[100vh] w-full flex-col bg-[black] overflow-hidden">
                    <Image
                        src="/VES_banner02.jpg"
                        alt="banner Vênus"
                        fill={true} 
                        className="opacity-20 object-cover"
                    />
                    <div className="absolute bottom-0 w-full h-70 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>   
                </div>       
                <h1 className="text-7xl font-bold lg:text-8xl text-center max-w-5xl mx-auto">
                    Reduza sua conta de luz em até <a className="text-yellow-500 font-bold underline">95%</a> com energia solar!
                </h1>

                <p className="text-shadow-md max-w-5xl text-lg md:text-xl lg:text-3xl text-center mx-auto py-4">
                    Somos a equipe <a className="text-yellow-500 font-bold">Vênus</a> e estamos aqui para revolucionar seu modo
                    de utilizar energia, faça seu orçamento e bora economizar!
                </p>

                <div className="flex space-x-2 lg:space-x-3 justify-center">
                    <Link
                        href="https://youtu.be/4FVBDKL2xFk?si=-k8nYfKh61Wp-qlI"
                        target="_blank"
                        className='flex cursor-pointer items-center gap-x-2 rounded-lg bg-gray-500 px-8 lg:px-10 py-4 text-lg font-bold text-black transition md:px-12 md:py-5 hover:bg-[#035EFC] hover:text-white'>
                        <CurrencyDollarIcon className="w-12 h-12 lg:w-10 lg:h-10" />
                        Simule seu orçamento
                    </Link>
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        className='flex cursor-pointer items-center gap-x-2 rounded-lg bg-white px-8 lg:px-10 py-4 text-lg font-bold text-black transition md:px-12 md:py-5 hover:bg-[#25d366] hover:text-white'>
                        <FaWhatsapp className="w-8 h-8 lg:w-10 lg:h-10" />
                        Fale conosco
                    </Link>
                </div>
            </div>
        </div>

    )
}