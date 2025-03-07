'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'Új Tető Készítése',
    description: 'Új tetők teljes körű ácsolása, szakszerű kivitelezése.',
    details: ['Új tető ácsolása', 'Csereplemez fedés', 'Szigetelés'],
    image: '/pictures/IMG_0927.JPG',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Tetőfelújítás',
    description: 'Régi tetők szakszerű felújítása, beázások megszüntetése.',
    details: ['Régi tető felújítása', 'Beázások megszüntetése', 'Fóliázás, lécezés, tetőátrakás'],
    image: '/pictures/IMG_0923.JPG',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Bádogos Munkák',
    description: 'Professzionális bádogos szolgáltatások.',
    details: ['Vápalemez, falszegő és orom bádog cseréje', 'Kúpcserepek cseréje, szigetelése', 'Csatorna tisztítás, javítás, csere'],
    image: '/pictures/IMG_0933.JPG',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: 'Speciális Munkák',
    description: 'Egyedi tetőmunkák és kiegészítő szolgáltatások.',
    details: ['Zsindelytető készítése, javítása', 'Kémények bontása, helyreállítása', 'Lapostető szigetelése'],
    image: '/pictures/IMG_0920.JPG',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

const additionalServices = [
  {
    title: 'Széldeszka, ereszalj festése',
    description: 'Akár alpin technikával is',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: 'Kültéri szauna készítése',
    description: 'Egyedi tervezés és kivitelezés',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Cserép átforgatás, takarítása',
    description: 'Professzionális tetőkarbantartás',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Vápalemez, falszegő csere',
    description: 'Bádogos munkák szakszerű kivitelezése',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Kémények bontása, helyreállítása',
    description: 'Szakszerű kéményjavítás és felújítás',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v8" />
      </svg>
    )
  },
  {
    title: 'Lapostető szigetelése',
    description: 'Vízzáró szigetelés készítése',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

// Képek a munkáinkhoz
const projectImages = [
  '/pictures/IMG_0908.JPG',
  '/pictures/IMG_0909.JPG',
  '/pictures/IMG_0910.JPG',
  '/pictures/IMG_0911.JPG',
  '/pictures/IMG_0912.JPG',
  '/pictures/IMG_0913.JPG',
  '/pictures/IMG_0914.JPG',
  '/pictures/IMG_0915.JPG'
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleService = (index: number) => {
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-raleway">
            Tetőfedő és Bádogos Szolgáltatások
          </h1>
          <p className="text-xl text-gray-700 font-montserrat max-w-3xl mx-auto">
            Minőségi tetőfedő és bádogos munkák, kedvező áron, több mint 20 éves szakmai tapasztalattal
          </p>
        </div>
        
        {/* Main Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-raleway">
            Fő szolgáltatásaink
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 font-raleway">{service.title}</h3>
                  <p className="text-gray-700 font-montserrat mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 font-raleway">
            További szolgáltatásaink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-amber-800">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 font-raleway">{service.title}</h3>
                <p className="text-gray-700 font-montserrat">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Works */}
        <div className="mt-20 mb-20">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src="/pictures/IMG_0927.JPG"
                alt="Korábbi munkáink"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white font-raleway">
                    Tekintse meg korábbi munkáinkat
                  </h2>
                  <a
                    href="/munkak"
                    className="inline-block bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors font-montserrat"
                  >
                    Munkáink megtekintése
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 p-12 rounded-2xl text-center shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-6 text-white font-raleway">Kérjen ingyenes árajánlatot!</h2>
          <p className="text-xl mb-8 text-white font-montserrat max-w-3xl mx-auto">
            Keressen minket bizalommal az alábbi telefonszámon, és szakembereink hamarosan felveszik Önnel a kapcsolatot.
          </p>
          <a
            href="tel:+36306547947"
            className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2 font-montserrat"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+36 30 654 7947</span>
          </a>
        </div>
      </div>
    </Layout>
  );
} 