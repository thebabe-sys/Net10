"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const Partners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    { id: 1, name: "Partner 1", image: "/logo2%20(1).png" },
    { id: 2, name: "Partner 2", image: "/logo2%20(2).png" },
    { id: 3, name: "Partner 3", image: "/logo2%20(3).png" },
    { id: 4, name: "Partner 4", image: "/logo2%20(4).png" },
  ];

  // Seamless continuous carousel scroll
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 2; // pixels per frame

    const animate = () => {
      scrollAmount += scrollSpeed;
      
      // Reset scroll when reaching the end
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 px-6 sm:px-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary-blue">
          Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Operating in full compliance with NIPOST (CLRD) regulations and the Nigeria Customs Service to ensure your goods move without legal delays.
        </p>

        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-8 will-change-transform"
          >
            {/* Original partners */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-1`}
                className="flex-shrink-0 w-[180px] h-[110px] bg-gray-50 rounded-md flex items-center justify-center p-4"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate partners for seamless loop */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-2`}
                className="flex-shrink-0 w-[180px] h-[110px] bg-gray-50 rounded-md flex items-center justify-center p-4"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className="object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/placeholder.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
