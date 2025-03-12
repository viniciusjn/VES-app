"use client"

import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/app/hooks/useScroll";

export default function Header() {

    const isScrolled = useScroll();

    return (
        <header className={`${isScrolled && 'bg-[#0A0A0A]'}
            fixed top-0 z-50 
            flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black/70 p-2 px-4 transition-all lg:px-16 lg:py-4`}>
            <Link href="/">
                <Image src="/VES_logo.png" alt="logo Netflix" width={70} height={70} className="cursor-pointer"/>
            </Link>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <nav>
                    <ul className="hidden md:flex md:space-x-6 hover:underline-offset-1">
                        <Link href="/"><li className="cursor-pointer p-2 hover:bg-[#035EFC] hover:rounded">Sobre</li></Link>
                        <Link href="/"><li className="cursor-pointer p-2 hover:bg-[#035EFC] hover:rounded">Contato</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}