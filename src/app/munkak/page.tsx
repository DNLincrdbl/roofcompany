'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    image: '/pictures/IMG_0908.JPG',
  },
  {
    image: '/pictures/IMG_0909.JPG',
  },
  {
    image: '/pictures/IMG_0910.JPG',
  },
  {
    image: '/pictures/IMG_0911.JPG',
  },
  {
    image: '/pictures/IMG_0912.JPG',
  },
  {
    image: '/pictures/IMG_0913.JPG',
  },
  {
    image: '/pictures/IMG_0914.JPG',
  },
  {
    image: '/pictures/IMG_0915.JPG',
  },
  {
    image: '/pictures/IMG_0916.JPG',
  },
  {
    image: '/pictures/IMG_0917.JPG',
  },
  {
    image: '/pictures/IMG_0918.JPG',
  },
  {
    image: '/pictures/IMG_0919.JPG',
  }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 font-raleway">Munkáink</h1>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index}>
              <div 
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-white"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt="Referencia munka"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 font-raleway">
            Munkáink a gyakorlatban
          </h2>
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 max-w-4xl mx-auto">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Az Ön böngészője nem támogatja a videó lejátszását.
            </video>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full mx-4">
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="relative h-[85vh]">
                <Image
                  src={selectedImage}
                  alt="Nagyított kép"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 font-raleway">Tetszik amit lát?</h2>
          <p className="text-xl mb-8 text-gray-700 font-montserrat max-w-3xl mx-auto">
            Keressen minket bizalommal és kérjen ingyenes árajánlatot az Ön projektjére is!
          </p>
          <a
            href="tel:+36306547947"
            className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2 font-montserrat"
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