'use client';

import { useState } from 'react';
import { MapIcon, Phone, Mail, Clock, Car, Navigation, Building, Users, Map, Satellite } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';

interface Location {
  id: string;
  name: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  capacity: number;
  type: 'mall' | 'office' | 'hospital' | 'mixed';
  services: string[];
  coordinates: { lat: number; lng: number };
  operatingHours: string;
  features: string[];
}

export default function UbicacionesPage() {
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [mapView, setMapView] = useState<'svg' | 'google'>('svg');

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Ubicaciones' }
  ];

  const locations: Location[] = [
    {
      id: 'cdmx-centro-comercial-santa-fe',
      name: 'Centro Comercial Santa Fe',
      state: 'Ciudad de México',
      city: 'Ciudad de México',
      address: 'Av. Vasco de Quiroga 3800, Santa Fe, Cuajimalpa',
      phone: '+52 55 2698 6000',
      capacity: 2500,
      type: 'mall',
      services: ['Valet Parking', 'Sistema de Guiado', 'Cajeros Automáticos', 'Seguridad 24/7'],
      coordinates: { lat: 19.3595, lng: -99.2590 },
      operatingHours: '06:00 - 23:00',
      features: ['Techado', 'Cámaras de Seguridad', 'Iluminación LED', 'Acceso Controlado']
    },
    {
      id: 'cdmx-world-trade-center',
      name: 'World Trade Center México',
      state: 'Ciudad de México',
      city: 'Ciudad de México',
      address: 'Montecito 38, Nápoles, Benito Juárez',
      phone: '+52 55 2698 6001',
      capacity: 1800,
      type: 'office',
      services: ['Facturación Electrónica', 'Tarjetas de Proximidad', 'Mantenimiento Integral'],
      coordinates: { lat: 19.3910, lng: -99.1719 },
      operatingHours: '24 horas',
      features: ['Acceso Ejecutivo', 'Plaza Comercial', 'Restaurantes', 'Centro de Negocios']
    },
    {
      id: 'edomex-centro-comercial-multiplaza',
      name: 'Centro Comercial Multiplaza',
      state: 'Estado de México',
      city: 'Naucalpan',
      address: 'Blvd. Manuel Ávila Camacho 1007, Lomas de Sotelo',
      phone: '+52 55 2698 6002',
      capacity: 2200,
      type: 'mall',
      services: ['Valet Parking', 'Sistema de Guiado', 'Circuito Cerrado'],
      coordinates: { lat: 19.4686, lng: -99.2394 },
      operatingHours: '09:00 - 22:00',
      features: ['Multi-nivel', 'Zona Comercial', 'Área de Comidas', 'Cine']
    },
    {
      id: 'jalisco-hospital-angeles',
      name: 'Hospital Ángeles Guadalajara',
      state: 'Jalisco',
      city: 'Guadalajara',
      address: 'Av. Hidalgo 930, Col. Moderna',
      phone: '+52 33 3827 5100',
      capacity: 800,
      type: 'hospital',
      services: ['Acceso Preferencial', 'Tarjetas de Proximidad', 'Mantenimiento Integral'],
      coordinates: { lat: 20.6597, lng: -103.3496 },
      operatingHours: '24 horas',
      features: ['Acceso Ambulancias', 'Zona Médicos', 'Visitantes', 'Emergencias']
    },
    {
      id: 'nuevo-leon-torre-koi',
      name: 'Torre KOI',
      state: 'Nuevo León',
      city: 'Monterrey',
      address: 'Av. Constitución 2405, Obispado',
      phone: '+52 81 8150 7000',
      capacity: 1200,
      type: 'office',
      services: ['Facturación Electrónica', 'Sistema de Guiado', 'Seguridad Biométrica'],
      coordinates: { lat: 25.6714, lng: -100.3370 },
      operatingHours: '06:00 - 22:00',
      features: ['Torre Corporativa', 'Helipuerto', 'Terraza', 'Gimnasio']
    },
    {
      id: 'puebla-angelopolis',
      name: 'Angelópolis Lifestyle Center',
      state: 'Puebla',
      city: 'Puebla',
      address: 'Blvd. del Niño Poblano 2510, Reserva Territorial Atlixcáyotl',
      phone: '+52 222 303 0900',
      capacity: 3000,
      type: 'mixed',
      services: ['Valet Parking', 'Sistema de Guiado', 'Cajeros Automáticos', 'Área Familiar'],
      coordinates: { lat: 19.0318, lng: -98.2430 },
      operatingHours: '10:00 - 22:00',
      features: ['Centro Comercial', 'Oficinas', 'Restaurantes', 'Entretenimiento']
    }
  ];

  const states = [
    { name: 'all', label: 'Todos los Estados', count: locations.length },
    { name: 'Ciudad de México', label: 'Ciudad de México', count: locations.filter(l => l.state === 'Ciudad de México').length },
    { name: 'Estado de México', label: 'Estado de México', count: locations.filter(l => l.state === 'Estado de México').length },
    { name: 'Jalisco', label: 'Jalisco', count: locations.filter(l => l.state === 'Jalisco').length },
    { name: 'Nuevo León', label: 'Nuevo León', count: locations.filter(l => l.state === 'Nuevo León').length },
    { name: 'Puebla', label: 'Puebla', count: locations.filter(l => l.state === 'Puebla').length },
  ];

  const types = [
    { name: 'all', label: 'Todos los Tipos', icon: Building },
    { name: 'mall', label: 'Centros Comerciales', icon: Building },
    { name: 'office', label: 'Edificios Corporativos', icon: Building },
    { name: 'hospital', label: 'Hospitales', icon: Building },
    { name: 'mixed', label: 'Usos Mixtos', icon: Building }
  ];

  const filteredLocations = locations.filter(location => {
    const stateMatch = selectedState === 'all' || location.state === selectedState;
    const typeMatch = selectedType === 'all' || location.type === selectedType;
    return stateMatch && typeMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'mall': return 'bg-blue-500';
      case 'office': return 'bg-green-500';
      case 'hospital': return 'bg-red-500';
      case 'mixed': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'mall': return 'Centro Comercial';
      case 'office': return 'Edificio Corporativo';
      case 'hospital': return 'Hospital';
      case 'mixed': return 'Uso Mixto';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="ubicaciones" />
      <Breadcrumb items={breadcrumbItems} />

      <HeroSection
        title="Nuestras Ubicaciones"
        subtitle="Presencia nacional con más de 80 estacionamientos en 11 estados de la República Mexicana, ofreciendo servicios de calidad y tecnología de vanguardia."
        background="primary"
        icon={<MapIcon className="w-10 h-10" />}
      />

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden mb-12">
            {/* Map Type Selector */}
            <div className="flex justify-center p-6 border-b border-gray-200">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setMapView('svg')}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                    mapView === 'svg'
                      ? 'bg-[#ec7324] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Mapa Nacional
                </button>
                <button
                  onClick={() => setMapView('google')}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                    mapView === 'google'
                      ? 'bg-[#ec7324] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Satellite className="w-4 h-4 mr-2" />
                  Vista Satelital
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Map Visualization */}
              <div className="p-8 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Presencia Nacional</h2>
                  <p className="text-gray-600">
                    {mapView === 'svg'
                      ? 'Más de 80 estacionamientos en 8 estados de la República Mexicana'
                      : 'Ubicaciones exactas de nuestros principales estacionamientos'
                    }
                  </p>
                </div>

                {mapView === 'svg' ? (
                  /* SVG Mexico Map */
                <div className="relative mx-auto max-w-lg">
                  <div className="bg-white rounded-lg shadow-md p-4 relative">
                    <svg viewBox="0 0 800 600" className="w-full h-auto">
                      {/* Mexico complete outline with states */}

                      {/* Baja California */}
                      <path
                        d="M45 120 L65 100 L75 110 L85 130 L95 150 L105 170 L95 185 L85 200 L75 215 L65 200 L55 185 L45 170 L35 155 L45 140 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="65" y="160" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">BC</text>

                      {/* Baja California Sur */}
                      <path
                        d="M55 220 L75 210 L85 225 L95 240 L105 255 L115 270 L105 285 L95 300 L85 315 L75 300 L65 285 L55 270 L45 255 L55 240 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Sonora */}
                      <path
                        d="M110 130 L150 120 L180 125 L190 140 L185 155 L175 170 L165 185 L155 200 L145 185 L135 170 L125 155 L115 140 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Chihuahua */}
                      <path
                        d="M195 125 L245 120 L275 125 L285 140 L280 165 L270 190 L260 205 L240 200 L220 195 L200 190 L195 165 L195 140 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Coahuila */}
                      <path
                        d="M290 145 L340 140 L370 145 L380 160 L375 185 L365 200 L355 215 L335 210 L315 205 L295 200 L290 175 L290 160 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Nuevo León */}
                      <path
                        d="M385 165 L415 160 L435 165 L445 180 L440 195 L430 210 L420 225 L405 220 L390 215 L385 200 L385 185 Z"
                        fill="#ec7324"
                        opacity="0.8"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="415" y="195" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">NL</text>

                      {/* Tamaulipas */}
                      <path
                        d="M450 170 L485 165 L515 170 L525 185 L520 210 L510 235 L500 250 L485 245 L470 240 L455 235 L450 210 L450 185 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Sinaloa */}
                      <path
                        d="M120 205 L155 200 L175 205 L185 220 L180 245 L170 270 L160 285 L145 280 L130 275 L120 260 L120 235 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Durango */}
                      <path
                        d="M265 210 L305 205 L325 210 L335 225 L330 250 L320 275 L310 290 L295 285 L280 280 L265 275 L265 250 L265 235 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Zacatecas */}
                      <path
                        d="M340 230 L370 225 L390 230 L400 245 L395 260 L385 275 L375 290 L360 285 L345 280 L340 265 L340 250 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* San Luis Potosí */}
                      <path
                        d="M405 250 L435 245 L455 250 L465 265 L460 280 L450 295 L440 310 L425 305 L410 300 L405 285 L405 270 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Nayarit */}
                      <path
                        d="M185 290 L215 285 L235 290 L245 305 L240 320 L230 335 L220 320 L210 305 L200 295 L185 305 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Jalisco */}
                      <path
                        d="M250 310 L285 305 L315 310 L325 325 L320 350 L310 375 L300 390 L285 385 L270 380 L255 375 L250 350 L250 335 Z"
                        fill="#ec7324"
                        opacity="0.8"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="285" y="350" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">JAL</text>

                      {/* Aguascalientes */}
                      <path
                        d="M330 330 L345 325 L355 335 L350 350 L340 360 L330 355 L330 345 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Guanajuato */}
                      <path
                        d="M360 340 L390 335 L410 340 L420 355 L415 370 L405 385 L395 400 L380 395 L365 390 L360 375 L360 360 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="390" y="370" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">GTO</text>

                      {/* Querétaro */}
                      <path
                        d="M425 360 L445 355 L455 370 L450 385 L440 395 L430 390 L425 380 L425 375 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Hidalgo */}
                      <path
                        d="M460 375 L485 370 L505 375 L515 390 L510 405 L500 420 L490 435 L475 430 L465 425 L460 410 L460 395 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="485" y="405" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">HGO</text>

                      {/* Estado de México */}
                      <path
                        d="M400 405 L440 400 L460 405 L470 420 L465 445 L455 470 L445 485 L430 480 L415 475 L400 470 L400 445 L400 430 Z"
                        fill="#ec7324"
                        opacity="0.8"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="435" y="445" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">MEX</text>

                      {/* Ciudad de México */}
                      <circle cx="430" cy="460" r="8" fill="#ec7324" opacity="0.9" stroke="#d97706" strokeWidth="3" className="hover:opacity-100 transition-opacity cursor-pointer">
                        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <text x="430" y="465" fontSize="9" fill="white" textAnchor="middle" className="font-bold">CDMX</text>

                      {/* Michoacán */}
                      <path
                        d="M315 395 L350 390 L380 395 L390 410 L385 435 L375 460 L365 475 L350 470 L335 465 L320 460 L315 435 L315 420 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Colima */}
                      <path
                        d="M285 395 L305 390 L315 405 L310 420 L300 430 L285 425 L285 415 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Morelos */}
                      <path
                        d="M450 485 L470 480 L480 495 L475 510 L465 520 L450 515 L450 505 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Tlaxcala */}
                      <path
                        d="M485 440 L500 435 L510 450 L505 465 L495 475 L485 470 L485 455 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Puebla */}
                      <path
                        d="M515 450 L545 445 L565 450 L575 465 L570 490 L560 515 L550 530 L535 525 L520 520 L515 495 L515 475 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="545" y="490" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">PUE</text>

                      {/* Guerrero */}
                      <path
                        d="M370 480 L410 475 L440 480 L450 495 L445 520 L435 545 L425 560 L410 555 L395 550 L380 545 L370 520 L370 505 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="410" y="520" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">GRO</text>

                      {/* Veracruz */}
                      <path
                        d="M520 255 L550 250 L580 255 L590 270 L585 295 L580 320 L575 345 L570 370 L565 395 L560 420 L555 445 L545 440 L535 435 L525 430 L520 405 L520 380 L520 355 L520 330 L520 305 L520 280 Z"
                        fill="#ec7324"
                        opacity="0.7"
                        stroke="#d97706"
                        strokeWidth="2"
                        className="hover:opacity-90 transition-opacity cursor-pointer"
                      />
                      <text x="555" y="350" fontSize="10" fill="white" textAnchor="middle" className="font-semibold">VER</text>

                      {/* Oaxaca */}
                      <path
                        d="M430 565 L470 560 L510 565 L530 570 L540 585 L535 610 L525 635 L515 650 L500 645 L485 640 L470 635 L455 630 L440 625 L430 600 L430 585 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Chiapas */}
                      <path
                        d="M545 615 L580 610 L610 615 L620 630 L615 655 L605 680 L595 695 L580 690 L565 685 L550 680 L545 655 L545 640 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Tabasco */}
                      <path
                        d="M565 535 L590 530 L610 535 L620 550 L615 575 L605 590 L590 585 L575 580 L565 565 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Campeche */}
                      <path
                        d="M625 555 L655 550 L675 555 L685 570 L680 595 L670 620 L660 635 L645 630 L630 625 L625 600 L625 580 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Yucatán */}
                      <path
                        d="M690 575 L720 570 L740 575 L750 590 L745 615 L735 630 L720 625 L705 620 L690 615 L690 595 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Quintana Roo */}
                      <path
                        d="M755 595 L775 590 L785 605 L780 630 L770 655 L760 670 L750 655 L755 630 L755 615 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="1"
                        className="hover:fill-gray-200 transition-colors cursor-pointer"
                      />

                      {/* Legend */}
                      <g transform="translate(50, 50)">
                        <rect x="0" y="0" width="160" height="80" fill="white" opacity="0.95" stroke="#d1d5db" strokeWidth="1" rx="8"/>
                        <text x="80" y="15" fontSize="12" fill="#374151" textAnchor="middle" className="font-bold">Presencia COEMSA</text>
                        <circle cx="15" cy="30" r="6" fill="#ec7324" opacity="0.8"/>
                        <text x="30" y="35" fontSize="10" fill="#374151">Estados con presencia</text>
                        <circle cx="15" cy="50" r="4" fill="#f3f4f6" stroke="#d1d5db"/>
                        <text x="30" y="55" fontSize="10" fill="#374151">Sin presencia actual</text>
                        <circle cx="15" cy="70" r="6" fill="#ec7324" opacity="0.9">
                          <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <text x="30" y="75" fontSize="10" fill="#374151">Mayor concentración</text>
                      </g>

                      {/* Title */}
                      <text x="400" y="30" fontSize="18" fill="#374151" textAnchor="middle" className="font-bold">COEMSA - Presencia Nacional</text>
                    </svg>

                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4 bg-[#ec7324] text-white rounded-lg p-3 text-center shadow-lg">
                      <div className="font-bold text-xl">80+</div>
                      <div className="text-xs">Estacionamientos</div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white bg-opacity-95 rounded-lg p-2 text-center border shadow-lg">
                      <div className="font-bold text-lg text-[#ec7324]">8</div>
                      <div className="text-xs text-gray-600">Estados Activos</div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#ec7324] to-orange-600 text-white rounded-lg p-2 text-center shadow-lg">
                      <div className="font-bold text-sm">CDMX</div>
                      <div className="text-xs">Mayor Presencia</div>
                    </div>
                  </div>
                </div>
                ) : (
                  /* Google Maps Integration */
                  <div className="relative mx-auto max-w-lg">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative">
                        {/* Google Maps Embed */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d240395.77152083754!2d-99.26756987652343!3d19.390519018398615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEstacionamientos%20COEMSA%20Mexico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full"
                        />

                        {/* Custom overlay with COEMSA locations */}
                        <div className="absolute top-4 left-4 bg-white bg-opacity-95 rounded-lg p-3 shadow-lg max-w-xs">
                          <h4 className="font-bold text-sm text-gray-800 mb-2">Ubicaciones COEMSA</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                              <span>Centros Comerciales</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                              <span>Edificios Corporativos</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                              <span>Hospitales</span>
                            </div>
                          </div>
                        </div>

                        {/* Location counter */}
                        <div className="absolute top-4 right-4 bg-[#ec7324] text-white rounded-lg p-3 text-center shadow-lg">
                          <div className="font-bold text-lg">{filteredLocations.length}</div>
                          <div className="text-xs">Ubicaciones</div>
                        </div>
                      </div>

                      {/* Interactive Location Pins */}
                      <div className="p-4 bg-gray-50 border-t">
                        <h5 className="font-semibold text-gray-800 mb-3">Ubicaciones Principales</h5>
                        <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                          {filteredLocations.slice(0, 4).map((location) => (
                            <div key={location.id} className="flex items-center justify-between p-2 bg-white rounded text-xs hover:bg-gray-50 transition-colors">
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full mr-2 ${
                                  location.type === 'mall' ? 'bg-red-500' :
                                  location.type === 'office' ? 'bg-blue-500' :
                                  location.type === 'hospital' ? 'bg-green-500' : 'bg-purple-500'
                                }`} />
                                <span className="font-medium text-gray-800">{location.name}</span>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                                target="_blank"
                                className="text-xs px-2 py-1 h-auto"
                              >
                                Ver
                              </Button>
                            </div>
                          ))}
                        </div>

                        <div className="mt-3 text-center">
                          <Button
                            variant="primary"
                            size="sm"
                            href="https://maps.google.com/maps?q=Estacionamientos+COEMSA+Mexico"
                            target="_blank"
                            className="text-xs"
                            leftIcon={<Navigation className="w-3 h-3" />}
                          >
                            Ver todas en Google Maps
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="p-8 bg-white bg-opacity-60">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Estadísticas Nacionales</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#ec7324]">{locations.length}</div>
                    <div className="text-sm text-gray-600">Ubicaciones Destacadas</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#ec7324]">
                      {locations.reduce((sum, loc) => sum + loc.capacity, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Espacios Totales</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#ec7324]">11</div>
                    <div className="text-sm text-gray-600">Estados</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#ec7324]">24/7</div>
                    <div className="text-sm text-gray-600">Operación</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center px-6 py-3 bg-[#ec7324] text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Consulta Disponibilidad
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Location List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Directorio de Ubicaciones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra la ubicación más cercana a ti y conoce todos los servicios disponibles
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* State Filter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Filtrar por Estado</h3>
                <div className="grid grid-cols-2 gap-2">
                  {states.map(state => (
                    <button
                      key={state.name}
                      onClick={() => setSelectedState(state.name)}
                      className={`p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedState === state.name
                          ? 'bg-[#ec7324] text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{state.label}</div>
                      <div className="text-sm opacity-75">{state.count} ubicaciones</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Filtrar por Tipo</h3>
                <div className="space-y-2">
                  {types.map(type => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.name}
                        onClick={() => setSelectedType(type.name)}
                        className={`w-full p-3 rounded-lg text-left transition-all duration-200 flex items-center ${
                          selectedType === type.name
                            ? 'bg-[#ec7324] text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Location Results */}
          <div className="mb-6">
            <p className="text-gray-600">
              Mostrando <span className="font-semibold">{filteredLocations.length}</span> de {locations.length} ubicaciones
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map(location => (
              <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{location.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(location.type)}`}>
                      {getTypeLabel(location.type)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{location.city}, {location.state}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Address */}
                  <div className="flex items-start mb-4">
                    <MapIcon className="w-5 h-5 text-[#ec7324] mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{location.address}</p>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-[#ec7324] mr-3" />
                    <a href={`tel:${location.phone}`} className="text-gray-700 text-sm hover:text-[#ec7324] transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 text-[#ec7324] mr-3" />
                    <p className="text-gray-700 text-sm">{location.operatingHours}</p>
                  </div>

                  {/* Capacity */}
                  <div className="flex items-center mb-6">
                    <Car className="w-5 h-5 text-[#ec7324] mr-3" />
                    <p className="text-gray-700 text-sm">{location.capacity.toLocaleString()} espacios</p>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Servicios</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.slice(0, 3).map((service, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {service}
                        </span>
                      ))}
                      {location.services.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          +{location.services.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                      target="_blank"
                      leftIcon={<Navigation className="w-4 h-4" />}
                    >
                      Cómo llegar
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      href={`tel:${location.phone}`}
                      leftIcon={<Phone className="w-4 h-4" />}
                    >
                      Llamar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12">
              <MapIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No se encontraron ubicaciones</h3>
              <p className="text-gray-500">Intenta ajustar los filtros para ver más resultados</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Servicios Disponibles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada ubicación está equipada con tecnología de vanguardia y servicios especializados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Sistema de Guiado"
              description="Localización automática de espacios disponibles mediante sensores LED inteligentes"
              icon={<Navigation className="w-8 h-8" />}
              iconColor="#ec7324"
            />
            <FeatureCard
              title="Valet Parking"
              description="Servicio personalizado de estacionamiento para mayor comodidad y seguridad"
              icon={<Users className="w-8 h-8" />}
              iconColor="#ec7324"
            />
            <FeatureCard
              title="Seguridad 24/7"
              description="Monitoreo continuo con cámaras de alta definición y personal de seguridad"
              icon={<Building className="w-8 h-8" />}
              iconColor="#ec7324"
            />
            <FeatureCard
              title="Facturación Digital"
              description="Sistema automatizado de facturación electrónica y múltiples formas de pago"
              icon={<Mail className="w-8 h-8" />}
              iconColor="#ec7324"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
