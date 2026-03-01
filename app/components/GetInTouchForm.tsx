"use client";

import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GetInTouchFormData } from "@types";
import { sendQuoteViaWhatsApp } from "@utils";
import CustomButton from "./CustomButton";

const serviceOptions = [
  { title: "Select Service Type", value: "" },
  { title: "Air Freight", value: "Air Freight" },
  { title: "Sea Freight", value: "Sea Freight" },
  { title: "Land Freight", value: "Land Freight" },
  { title: "Track Shipment", value: "Track Shipment" },
];

const GetInTouchForm = () => {
  const [formData, setFormData] = useState<GetInTouchFormData & { phoneNumber: string; serviceType: string }>({
    name: "",
    email: "",
    phoneNumber: "",
    packageWeight: 0,
    destination: "",
    serviceType: "",
  });

  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "packageWeight" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleServiceChange = (option: { title: string; value: string }) => {
    setSelectedService(option);
    setFormData((prev) => ({
      ...prev,
      serviceType: option.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendQuoteViaWhatsApp(formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        packageWeight: 0,
        destination: "",
        serviceType: "",
      });
      setSelectedService(serviceOptions[0]);
      alert("Your quote request has been sent!");
    } catch (error) {
      console.error("Error sending quote:", error);
      alert("Failed to send quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch-form" className="py-16 px-6 sm:px-16 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-2 text-primary-blue text-center">Get In Touch</h2>
          <p className="mb-8 text-center text-gray-600">
            Your data is secure. By submitting this form, a Net10 logistics specialist will contact you via WhatsApp or Email within 30 minutes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+234 000 000 0000"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Service Type *
              </label>
              <Listbox value={selectedService} onChange={handleServiceChange}>
                <div className="relative">
                  <Listbox.Button className="w-full border border-gray-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent bg-white">
                    <span>{selectedService.title}</span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {serviceOptions.map((option) => (
                        <Listbox.Option
                          key={option.value}
                          value={option}
                          className={({ active }) =>
                            `py-3 px-4 cursor-pointer ${
                              active ? "bg-primary-blue text-white" : "text-gray-900"
                            }`
                          }
                        >
                          {option.title}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Package Weight */}
            <div>
              <label htmlFor="packageWeight" className="block text-sm font-semibold text-gray-900 mb-2">
                Package Weight (kg) *
              </label>
              <input
                type="number"
                id="packageWeight"
                name="packageWeight"
                value={formData.packageWeight || ""}
                onChange={handleChange}
                placeholder="e.g., 50"
                min="0"
                step="0.1"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Destination */}
            <div>
              <label htmlFor="destination" className="block text-sm font-semibold text-gray-900 mb-2">
                Destination *
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g., Lagos, Nigeria"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <CustomButton
              title={isSubmitting ? "Sending..." : "Submit"}
              btnType="submit"
              isDisabled={isSubmitting}
              containerStyles="w-full bg-white text-primary-blue hover:bg-primary-blue hover:text-white border-2 border-primary-blue disabled:opacity-70 disabled:cursor-not-allowed rounded-full py-3 font-bold transition-all"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;
