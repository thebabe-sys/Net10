import { CarProps, FilterProps, GetQuoteFormData } from "../types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

/**
 * Send a quote request via WhatsApp
 * @param formData - The quote form data
 * @param phoneNumber - Optional WhatsApp phone number with country code (default: +2349000000000)
 */
export const sendQuoteViaWhatsApp = async (formData: GetQuoteFormData, phoneNumber: string = "2349000000000") => {
  const message = encodeURIComponent(
    `Hello! I would like to get a quote for the following shipment:\n\n` +
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

/**
 * Send a quote request to Google Sheets via webhook
 * Configure your Google Apps Script webhook URL in environment variables
 * @param formData - The quote form data
 */
export const sendQuoteViaGoogleSheets = async (formData: GetQuoteFormData) => {
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
