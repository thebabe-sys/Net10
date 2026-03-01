"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const handleContactClick = () => {
    const form = document.getElementById("get-in-touch-form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav 
      className="w-full padding-x sm:px-16 px-6 py-4 max-width bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-main.png')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="flex max-width justify-between items-center gap-5 relative z-10">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/Net10.png"
            alt="Net10 Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={handleContactClick}
          className="px-6 py-2 max-sm:hidden border-2 border-white text-white text-[14px] leading-[17px] rounded-full hover:bg-gray-200 hover:text-gray-900 transition-all"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
