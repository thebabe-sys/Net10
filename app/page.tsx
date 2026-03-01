"use client";

import { useEffect, useState } from "react";

import { Hero, CustomFilter, Partners } from "@components";
import ServiceCard from "./components/CarCard";
import GetInTouchForm from "./components/GetInTouchForm";
import { fetchServices } from "@utils";
import { shippingMethods } from "@constants";
import { ServiceProps, FilterProps } from "@types";

export interface HomeProps {
  searchParams: FilterProps;
}

export default function Home({ searchParams }: HomeProps) {
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAllServices = async () => {
      try {
        setIsLoading(true);

        const response = await fetchServices({
          category: searchParams.category || "",
          search: searchParams.search || "",
        });

        if (Array.isArray(response) && response.length > 0) {
          setServices(response);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setIsLoading(false);
      }
    };

    getAllServices();
  }, [searchParams]);

  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-16 px-6 sm:px-16 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-primary-blue mb-4">Our Services</h1>
            <p className="text-lg text-gray-600">Choose the shipping method that best suits your needs</p>
          </div>

          <div className="mb-12 flex justify-center">
            <CustomFilter title="category" options={shippingMethods} />
          </div>

          {!isLoading ? (
            <section>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {Array.isArray(services) && services.length > 0 ? (
                  services.map((service) => (
                    <ServiceCard service={service} key={service.id} />
                  ))
                ) : (
                  <div className="col-span-full py-16 text-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">No services found</h2>
                    <p className="text-gray-600">
                      We couldn't find services matching your criteria. Please try different filters.
                    </p>
                  </div>
                )}
              </div>
            </section>
          ) : (
            <div className="py-16 text-center">
              <h2 className="text-xl font-bold text-gray-900">Loading services...</h2>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <Partners />

      {/* Get In Touch Form */}
      <GetInTouchForm />
    </main>
  );
}
