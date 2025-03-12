import { FaStar } from "react-icons/fa";

export default function Reviews() {
    const reviews = [
      {
        name: "João Silva",
        image: "/VES_banner03.jpg",
        rating: 5,
        text: "Excelente serviço, recomendo muito! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum earum quam odio ab dolore deserunt modi maiores, cum praesentium libero obcaecati aut molestias, sed, laboriosam eligendi exercitationem omnis quibusdam.",
        timeAgo: "há 2 semanas",
      },
      {
        name: "Maria Oliveira",
        image: "/VES_banner03.jpg",
        rating: 4,
        text: "Atendimento ótimo, só demorou um pouco a instalação. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum earum quam odio ab dolore deserunt modi maiores, cum praesentium libero obcaecati aut molestias, sed, laboriosam eligendi exercitationem omnis quibusdam.",
        timeAgo: "há 1 mês",
      },
      {
        name: "Carlos Santos",
        image: "/VES_banner03.jpg",
        rating: 5,
        text: "Equipe muito profissional, energia solar é o futuro! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum earum quam odio ab dolore deserunt modi maiores, cum praesentium libero obcaecati aut molestias, sed, laboriosam eligendi exercitationem omnis quibusdam.",
        timeAgo: "há 6 meses",
      },
      {
        name: "Ana Pereira",
        image: "/VES_banner03.jpg",
        rating: 4,
        text: "Gostei muito do atendimento e suporte pós-instalação! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque rerum earum quam odio ab dolore deserunt modi maiores, cum praesentium libero obcaecati aut molestias, sed, laboriosam eligendi exercitationem omnis quibusdam.",
        timeAgo: "há 1 ano",
      },
    ];
  
    return (
      <section className="w-full min-h-screen bg-[#0A0A0A] flex flex-col items-center py-16 px-4">
        <h2 className="text-5xl lg:text-6xl font-bold text-white text-center mb-12 pt-16 pb-5">
          O que nossos clientes dizem?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 flex flex-col items-start shadow-lg w-full">
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
                  <div className="ml-4">
                    <h3 className="text-xl text-[#171717] font-bold">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.timeAgo}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2 text-2xl">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-left">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
}
