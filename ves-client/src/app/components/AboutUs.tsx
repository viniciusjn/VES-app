import Image from "next/image";
import { FaLeaf, FaBolt, FaHandshake, FaStar, FaWhatsapp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">Quem Somos</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Equipe */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-105">
            <Image src="/VES_banner03.jpg" alt="Nossa equipe" width={500} height={200} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold">Nossa Equipe</h3>
            <p className="mt-2 text-gray-300">Profissionais dedicados para oferecer a melhor solução em energia solar.</p>
          </div>

          {/* Card 2 - Valores */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-105">
            <h3 className="text-2xl font-semibold mb-4">Nossos Valores</h3>
            <div className="text-gray-300 space-y-4">
              <div className="flex items-center gap-3">
                <FaLeaf className="text-green-400 text-xl" />
                <span className="text-lg">Sustentabilidade e respeito ao meio ambiente</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBolt className="text-yellow-400 text-xl" />
                <span className="text-lg">Inovação para um futuro mais eficiente</span>
              </div>
              <div className="flex items-center gap-3">
                <FaHandshake className="text-blue-400 text-xl" />
                <span className="text-lg">Compromisso com nossos clientes</span>
              </div>
              <div className="flex items-center gap-3">
                <FaStar className="text-orange-400 text-xl" />
                <span className="text-lg">Qualidade e excelência em cada projeto</span>
              </div>
            </div>
          </div>

          {/* Card 3 - CTA */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center h-105">
            <h3 className="text-2xl font-semibold">Entre em Contato</h3>
            <p className="mt-2 text-gray-300">Tem dúvidas ou quer um orçamento? Estamos à disposição para ajudar você a transformar sua energia!</p>
            <p className="mt-4 text-gray-300">📍 Atendimento em todo o Brasil</p>
            <p className="text-gray-300">📞 Suporte especializado</p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-xl" />
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
