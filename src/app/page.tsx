'use client';

import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src="/pictures/IMG_0927.JPG"
          alt="Ács munkája"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 h-full flex items-center justify-center text-center text-white"
        >
          <div className="max-w-3xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white font-raleway"
            >
              Minőségi ács munkák
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-white font-montserrat"
            >
              Szakértő ács szolgáltatások a legmagasabb minőségben
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-4 items-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:ferenczmate.business@gmail.com"
                  className="w-64 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center font-montserrat"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  Email küldése
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+36306547947"
                  className="w-64 bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center font-montserrat"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hívjon most
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="viber://chat?number=+36306547947"
                  className="w-64 bg-[#665CAC] text-white hover:bg-[#7d71c5] px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center font-montserrat"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.2 0C5.85 0 1.3 4.55 1.3 9.9c0 2.15.7 4.15 1.85 5.75L1.3 20l4.35-1.85c1.6 1.15 3.6 1.85 5.75 1.85 5.35 0 9.9-4.55 9.9-9.9S16.55 0 11.2 0zm0 18.2c-1.85 0-3.6-.7-4.75-1.85l-3.5 1.4 1.4-3.5c-1.15-1.15-1.85-2.9-1.85-4.75 0-4.55 3.5-8.05 8.05-8.05s8.05 3.5 8.05 8.05-3.5 8.05-8.05 8.05z"/>
                  </svg>
                  Viber üzenet
                </motion.a>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/szolgaltatasok"
                  className="w-64 bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center font-montserrat"
                >
                  Szolgáltatásaink
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 mt-32">
        {[
          {
            title: "Szakértelem",
            text: "Több éves tapasztalattal rendelkezünk az ács szakmában, garantálva a kiváló minőséget."
          },
          {
            title: "Megbízhatóság",
            text: "Minden munkánkat precízen, időben és megbízhatóan végezzük el."
          },
          {
            title: "Minőség",
            text: "Csak a legjobb minőségű anyagokat használjuk, hogy tartós munkát nyújthassunk."
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">{feature.title}</h3>
            <p className="text-gray-700 font-montserrat">{feature.text}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-amber-800 text-white p-12 rounded-2xl text-center shadow-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-white font-raleway"
        >
          Készítsünk valami szépet együtt!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 text-white font-montserrat"
        >
          Keressen minket bizalommal, segítünk megvalósítani az ön elképzeléseit.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/munkak"
            className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block font-montserrat"
          >
            Nézzük meg a munkáinkat
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
