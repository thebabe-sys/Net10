import { MouseEventHandler } from "react";

export interface ServiceProps {
  id?: string;
  serviceName: string;
  description: string;
  bestFor: string;
  category: "Air Freight" | "Sea Freight" | "Land Freight";
  estimatedDelivery: string;
  basePrice: number;
  icon?: string;
}

export interface FilterProps {
  category?: string;
  search?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface ServiceCardProps {
  service: ServiceProps;
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

export interface GetInTouchFormData {
  name: string;
  email: string;
  packageWeight: number;
  destination: string;
}
