// Configuración centralizada de la aplicación
export const config = {
  // Información de contacto
  contact: {
    whatsapp: {
      number: "5255123456", // Reemplazar con el número real de COEMSA
      message: "Hola! Me interesa conocer más sobre los servicios de gestión de estacionamientos de COEMSA. ¿Podrían proporcionarme más información?"
    },
    phone: "+52 55 1234 5678", // Reemplazar con el número real
    email: "contacto@coemsa.com", // Reemplazar con el email real
    address: "Ciudad de México, México" // Reemplazar con la dirección real
  },
  
  // Información de la empresa
  company: {
    name: "COEMSA",
    fullName: "COEMSA - Gestión de Estacionamientos",
    description: "Empresa mexicana dedicada al servicio de operación y administración de estacionamientos, con + de 20 años de experiencia",
    parentCompany: "Gigante Grupo Inmobiliario",
    
    // Estadísticas
    stats: {
      estados: 11,
      estacionamientos: 84,
      empleados: 440
    }
  },
  
  // URLs externas
  externalUrls: {
    facturacion: "https://facturacion.coemsa.com/facturacion/"
  },
  
  // Configuración de SEO
  seo: {
    defaultTitle: "COEMSA - Gestión de Estacionamientos",
    defaultDescription: "Empresa mexicana dedicada al servicio de operación y administración de estacionamientos, con + de 20 años de experiencia",
    siteUrl: "https://coemsa.com" // Reemplazar con la URL real
  }
} as const; 