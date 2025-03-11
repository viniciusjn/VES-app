import Image from "next/image";
import { FaHammer, FaTools, FaPencilRuler } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="relative w-full z-0 lg:h-[50vh] h-[90vh] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
    style={{
      backgroundImage: "url('https://www.techspot.com/images2/news/bigimage/2022/04/2022-04-14-image-15.jpg')", 
    }}>
      <div className="absolute inset-0 bg-black/75"></div>
      

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-5xl mx-auto p-6">
        {/* Left Side - Main Text */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="border-l-4 border-yellow-500 pl-3">Our Construction</span> Services
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus erat consectetur.
          </p>
          <button className="mt-5 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition">
            GET A FREE QUOTE
          </button>
        </div>

        {/* Right Side - Services List */}
        <div className="md:w-1/3 mt-8 md:mt-0 md:ml-10 bg-gray-800 bg-opacity-75 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-500">What We Do</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <FaHammer className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Building Construction</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaTools className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Building Repairs</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPencilRuler className="text-yellow-500 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold">Custom Design</h3>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
