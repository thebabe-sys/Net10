import { ServiceProps, FilterProps, GetInTouchFormData } from "../types";
import { services } from "@constants";

// Search services by name or description
export const searchServices = (query: string): ServiceProps[] => {
  if (!query) return services;
  
  const lowerQuery = query.toLowerCase();
  return services.filter(service =>
    service.serviceName.toLowerCase().includes(lowerQuery) ||
    service.description.toLowerCase().includes(lowerQuery)
  );
};

// Filter services by category
export const filterServicesByCategory = (category: string): ServiceProps[] => {
  if (!category) return services;
  return services.filter(service => service.category === category);
};

// Get all services (with optional filtering)
export async function fetchServices(filters: FilterProps) {
  let filtered = [...services];
  
  // Filter by category if provided
  if (filters.category && filters.category !== "") {
    filtered = filtered.filter(s => s.category === filters.category);
  }
  
  // Filter by search term if provided
  if (filters.search && filters.search !== "") {
    const lowerSearch = filters.search.toLowerCase();
    filtered = filtered.filter(s =>
      s.serviceName.toLowerCase().includes(lowerSearch) ||
      s.description.toLowerCase().includes(lowerSearch)
    );
  }
  
  return filtered;
}

// Send quote via WhatsApp
export const sendQuoteViaWhatsApp = async (
  formData: GetInTouchFormData,
  phoneNumber: string = "2349000000000"
) => {
  const message = encodeURIComponent(
    `Hello Net110! I would like to get a quote for the following shipment:\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Package Weight: ${formData.packageWeight} kg\n` +
    `Destination: ${formData.destination}\n\n` +
    `Please provide me with a quote.`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  // Open WhatsApp in a new window
  window.open(whatsappUrl, "_blank");
  
  // Also attempt to send to Google Sheets as backup
  try {
    await sendQuoteViaGoogleSheets(formData);
  } catch (error) {
    console.log("Google Sheets backup not configured", error);
  }
};

// Send quote to Google Sheets via webhook
export const sendQuoteViaGoogleSheets = async (formData: GetInTouchFormData) => {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK;
  
  if (!webhookUrl) {
    console.warn("Google Sheets webhook URL not configured");
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        packageWeight: formData.packageWeight,
        destination: formData.destination,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send quote: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error sending quote to Google Sheets:", error);
    throw error;
  }
};
