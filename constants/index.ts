import { ServiceProps } from "@types";

export const shippingMethods = [
  { title: "Shipping Method", value: "" },
  { title: "Air Freight", value: "Air Freight" },
  { title: "Sea Freight", value: "Sea Freight" },
  { title: "Land Freight", value: "Land Freight" },
];

export const services: ServiceProps[] = [
  {
    id: "1",
    serviceName: "Express Air Freight",
    description: "Fast international air shipping for urgent deliveries",
    bestFor: "Critical documents, high-value electronics, and medical supplies. Includes real-time tracking and priority customs handling.",
    category: "Air Freight",
    estimatedDelivery: "2-3 days",
    basePrice: 150,
    icon: "/air-freight.avif",
  },
  {
    id: "2",
    serviceName: "Standard Sea Freight",
    description: "Cost-effective ocean shipping for large cargo",
    bestFor: "Industrial machinery, vehicles, and bulk retail inventory. The most economical way to move heavy tonnage globally.",
    category: "Sea Freight",
    estimatedDelivery: "14-21 days",
    basePrice: 50,
    icon: "/sea-freight.avif",
  },
  {
    id: "3",
    serviceName: "Regional Ground Transport",
    description: "Reliable road transport within West Africa",
    bestFor: "Haulage across Nigeria and the ECOWAS region. Reliable fleet management for door-to-door distribution.",
    category: "Land Freight",
    estimatedDelivery: "5-7 days",
    basePrice: 75,
    icon: "/ground-freight.webp",
  },
  {
    id: "4",
    serviceName: "Premium Air Express",
    description: "Fastest air delivery with tracking and insurance",
    bestFor: "Critical documents, high-value electronics, and medical supplies. Includes real-time tracking and priority customs handling.",
    category: "Air Freight",
    estimatedDelivery: "1-2 days",
    basePrice: 200,
    icon: "/air-express.avif",
  },
  {
    id: "5",
    serviceName: "Economy Sea Shipping",
    description: "Budget-friendly ocean freight option",
    bestFor: "Industrial machinery, vehicles, and bulk retail inventory. The most economical way to move heavy tonnage globally.",
    category: "Sea Freight",
    estimatedDelivery: "21-28 days",
    basePrice: 35,
    icon: "/seashipping.webp",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Our Services", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Business Relations", url: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Air Freight", url: "/" },
      { title: "Sea Freight", url: "/" },
      { title: "Land Freight", url: "/" },
      { title: "Track Shipment", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "FAQ", url: "/" },
      { title: "Documentation", url: "/" },
      { title: "Contact Support", url: "/" },
      { title: "Terms & Conditions", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "LinkedIn", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
