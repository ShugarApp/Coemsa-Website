// Tipos globales para la aplicación

export interface NavItem {
  href: string;
  label: string;
  key: string;
}

export interface ServiceItem {
  href: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  whatsapp: {
    number: string;
    message: string;
  };
  phone: string;
  email: string;
  address: string;
}

export interface CompanyStats {
  estados: number;
  estacionamientos: number;
  empleados: number;
}

export interface CompanyInfo {
  name: string;
  fullName: string;
  description: string;
  parentCompany: string;
  stats: CompanyStats;
}

export interface ExternalUrls {
  facturacion: string;
}

export interface SEOConfig {
  defaultTitle: string;
  defaultDescription: string;
  siteUrl: string;
}

export interface AppConfig {
  contact: ContactInfo;
  company: CompanyInfo;
  externalUrls: ExternalUrls;
  seo: SEOConfig;
}

// Tipos para componentes
export interface HeaderProps {
  currentPage?: string;
}

export interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export interface WhatsAppFloatProps {
  className?: string;
} 