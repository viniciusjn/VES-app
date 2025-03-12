import Link from "next/link";
import { FaTools, FaCalculator, FaDollarSign } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function AboutUs() {

  const whatsappNumber = "5532999701993";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre um orçamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative w-full z-0 lg:h-[70vh] h-[90vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
    style={{
      backgroundImage: "url('https://assets.science.nasa.gov/content/dam/science/esd/eo/content-feature/nightlights/images/media/BlackMarble_2016_Americas_composite.png')", 
    }}>
      <div className="absolute inset-0 bg-black/75"></div>
      

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto p-6">
        {/* Left Side - Main Text */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold">
            <span className="border-l-4 border-[#035EFC] pl-3 text-5xl">Sobre a <a className="text-yellow-500">Vênus</a></span>
            <a className="mt-2 block"><br/>Nosso objetivo</a>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Nós da Vênus, focamos em oferecer soluções completas, inovadoras e de qualidade, visando proporcionar a geração de energia elétrica sustentável a consumidores empresáriais e residenciais. 
          </p>
          <Link href={whatsappUrl} target="_blank">
            <button className="mt-5 cursor-pointer bg-[#035EFC] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition">
              SAIBA MAIS
            </button>
          </Link>
        </div>

        {/* Right Side - Services List */}
        <div className="md:w-2/5 mt-8 md:mt-0 md:ml-10 bg-[#171717] bg-opacity-75 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-[#035EFC]">Nossos serviços</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <FaCalculator className="text-[#035EFC] text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Orçamento grátis</h3>
                <p className="text-sm text-gray-300">Enviamos um orçamento sem compromisso.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaTools className="text-[#035EFC] text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Projeto e instalação</h3>
                <p className="text-sm text-gray-300">A equipe especializada cuida de tudo.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaDollarSign className="text-[#035EFC] text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Economia imediata</h3>
                <p className="text-sm text-gray-300">Redução na conta de luz já no primeiro mês.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaGear className="text-[#035EFC] text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Manutenção e limpeza</h3>
                <p className="text-sm text-gray-300">Realizamos a manutenção/limpeza das placas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}