"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const handleServicesClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormClick = () => {
    const form = document.getElementById("get-in-touch-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer bg-white border-t border-gray-200">
      <div className="footer__links-container">
        <div className="footer__rights">
          <Image
            src="/Net10.png"
            alt="Net10 Logo"
            width={140}
            height={140}
            className="object-contain mb-4"
            style={{ filter: 'brightness(0) saturate(100%) invert(42%) sepia(91%) saturate(494%) hue-rotate(223deg) brightness(102%) contrast(100%)' }}
          />
          <p className="text-base text-black font-medium max-w-xs">
            Reliable Logistics Solutions for Nigeria and Beyond <br />
            All rights reserved &copy; 2026
          </p>
        </div>

        <div className="footer__links">
          {/* About Section */}
          <div className="footer__link">
            <h3 className="font-bold text-black">About</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                How it works
              </button>
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Our Services
              </button>
              <button
                onClick={handleFormClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Partnership
              </button>
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Business Relations
              </button>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer__link">
            <h3 className="font-bold text-black">Services</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Air Freight
              </button>
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Sea Freight
              </button>
              <button
                onClick={handleServicesClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Land Freight
              </button>
              <button
                onClick={handleFormClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Track Shipment
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="footer__link">
            <h3 className="font-bold text-black">Support</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleFormClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                FAQ
              </button>
              <button
                onClick={handleFormClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Documentation
              </button>
              <button
                onClick={handleFormClick}
                className="text-black hover:text-primary-blue transition-colors text-left font-medium"
              >
                Contact Support
              </button>
              <Link href="/" className="text-black hover:text-primary-blue transition-colors font-medium">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="footer__link">
            <h3 className="font-bold text-black">Socials</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
                <span className="font-medium">Net10</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-medium">Net10@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
                <span className="font-medium">+234 808 770 4432</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-medium">Net10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyrights">
        <p className="text-black font-medium">@2026 Net10. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-black hover:text-primary-blue transition-colors font-medium">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-black hover:text-primary-blue transition-colors font-medium">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
