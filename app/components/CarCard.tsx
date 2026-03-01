"use client";

import { ServiceProps } from "@types";
import CustomButton from "./CustomButton";

interface ServiceCardProps {
  service: ServiceProps;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { serviceName, description, bestFor, icon } = service;

  const handleGetInTouch = () => {
    const form = document.getElementById("get-in-touch-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="service-card group relative rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[550px] flex flex-col p-8 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url('${icon}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {serviceName}
        </h3>

        <p className="text-white text-base mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="bg-white/10 rounded-md p-4 mb-8 flex-grow">
          <p className="text-white/90 text-sm leading-relaxed">
            <span className="font-semibold">Best For:</span> {bestFor}
          </p>
        </div>

        <div className="space-y-4 mb-6"></div>

        {/* Button - visible on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
          <CustomButton
            title="Get In Touch"
            containerStyles="w-full border-2 border-white text-white rounded-full font-bold py-3 hover:bg-gray-400 hover:text-white transition-all"
            handleClick={handleGetInTouch}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
