"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleContactClick = () => {
    const form = document.getElementById("get-in-touch-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="relative w-full px-6 sm:px-16 flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-main.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar Section */}
      <div className="relative z-10 w-full max-width flex justify-between items-center gap-5 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Net10.png"
            alt="Net10 Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={handleContactClick}
          className="max-sm:hidden border-2 border-white text-white text-[14px] leading-[17px] rounded-full hover:bg-gray-200 hover:text-gray-900 transition-all px-6 py-2"
        >
          Contact Us
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto text-center flex flex-col items-center justify-center py-32">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-white mb-6">
          Seamless Logistics for the Modern Nigerian Enterprise.
        </h1>

        <p className="text-[22px] text-white/90 font-light mb-10 max-w-3xl">
          From the bustling hubs of Lagos to the global marketplace, we bridge the gap with precision. Whether it's clearing customs or last-mile delivery, your cargo is our priority. Secure. Timely. Transparent.
        </p>

        <CustomButton
          title="Explore Services"
          containerStyles="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-gray-400 hover:text-white transition-all"
          handleClick={handleExploreServices}
        />
      </div>
    </div>
  );
};

export default Hero;
