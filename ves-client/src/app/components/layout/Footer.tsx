import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {

  const whatsappNumber = "5532999701993";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre um orçamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-zinc-900 text-white py-8 mt-auto">
        <div className="container mx-auto flex flex-col items-center text-center space-y-6 px-6">
            <h2 className="text-2xl font-bold tracking-wider">Vênus Energia Solar</h2>

            <nav className="flex space-x-6 text-sm font-medium">
                <Link href="/" className="hover:text-[#035EFC] transition">Início</Link>
                <Link href="/" className="hover:text-[#035EFC] transition">Sobre</Link>
                <Link href="/" className="hover:text-[#035EFC] transition">Contato</Link>
            </nav>

            <div className="flex space-x-4">
                <Link href={whatsappUrl} target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#035EFC] transition">
                    <FaWhatsapp className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/venusenergiasolar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#035EFC] transition">
                    <FaInstagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.facebook.com/share/1E4tFpQWr8/" target="_blank" className="p-2 bg-gray-800 rounded-full hover:bg-[#035EFC] transition">
                    <FaFacebookF className="w-5 h-5" />
                </Link>   
            </div>

            <p className="text-xs text-gray-400">©{new Date().getFullYear()} Vênus Energia Solar. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}
