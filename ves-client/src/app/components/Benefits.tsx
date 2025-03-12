import { CurrencyDollarIcon, HomeIcon, GlobeAmericasIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const features = [
  { icon: CurrencyDollarIcon, 
    title: "Economize Dinheiro", 
    description: "Com a instalação dos painéis solares, você pode economizar em até 95% sua conta de luz." },
  { icon: HomeIcon, 
    title: "Valorize seu Imóvel", 
    description: "Os painéis e todo o sistema instalado em sua casa, podem contriubuir para um diferencial de mercado e valorizar seu imóvel." },
  { icon: GlobeAmericasIcon, 
    title: "Ajude o Meio Ambiente", 
    description: "A energia gerada pelos painéis solares é considerada limpa e sustentável, contribuindo para o bem do nosso meio ambiente." },
  { icon: ChartBarIcon, 
    title: "Proteja-se Contra a Inflação", 
    description: "Por vários motivos diferentes, sejam políticos, econômicos ou naturais, a conta de energia sofre diversas alterações aumentando cada vez mais seus valores." }
];

export default function Benefits() {
  return (
    <section className="text-white lg:py-16 h-[190vh] md:h-[110vh] lg:h-[105vh]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-bold">Quais são os principais benefícios ao utilizar energia solar?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-800 p-10 rounded-full">
                <feature.icon className="h-20 w-20 lg:h-30 lg:w-30 text-[#035EFC]" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-xl text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
