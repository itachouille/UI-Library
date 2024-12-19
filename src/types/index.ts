import { LucideIcon } from 'lucide-react';

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  items: FooterLink[];
}

export interface SocialLink {
  label: string;
  href: string;
  svg: React.ReactNode;
}

export interface SidebarItem {
  href: string;
  icon?: string;
  text: string;
}

export interface SidebarCategory {
  category: string;
  isActive?: boolean;
  icon?: LucideIcon;
  items: SidebarItem[];
}

export interface CarditemProps {
  title: string;
  date: string;
  marked?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
}
