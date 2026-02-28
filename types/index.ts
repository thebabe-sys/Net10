import { MouseEventHandler } from "react";

// Service type for Logistics
export interface ServiceProps {
  id: string;
  serviceName: string;
  description: string;
  icon: string;
  estimatedDelivery: string;
  pricePerKg: number;
  category: "Air Freight" | "Sea Freight" | "Land Freight";
}

// Legacy Car types kept for reference
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
  category?: string;
  search?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ServiceCardProps {
  service: ServiceProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface GetQuoteFormData {
  name: string;
  email: string;
  packageWeight: number;
  destination: string;
}

export interface FooterLink {
  title: string;
  url: string;
  icon?: string;
  handleScroll?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
