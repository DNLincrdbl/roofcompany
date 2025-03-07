import Layout from '@/components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 font-raleway">Rólunk</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/pictures/IMG_0927.JPG"
              alt="Ács mester a munkában"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 font-raleway">Történetünk</h2>
            <p className="text-gray-700 text-lg font-montserrat">
              Több mint 20 éves tapasztalattal rendelkezünk az ács szakmában. Célunk, hogy
              kiváló minőségű munkát nyújtsunk ügyfeleinknek, miközben megőrizzük a hagyományos
              ács szakma értékeit és technikáit.
            </p>
            <p className="text-gray-700 text-lg font-montserrat">
              Csapatunk tagjai mindannyian képzett szakemberek, akik szeretettel és
              elköteleződéssel végzik munkájukat. Hiszünk abban, hogy a jó munka
              alapja a megbízható együttműködés és a nyílt kommunikáció.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-12 rounded-2xl shadow-xl mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 font-raleway">Értékeink</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Minőség</h3>
              <p className="text-gray-700 font-montserrat">
                Csak a legjobb minőségű anyagokat használjuk és minden részletre odafigyelünk.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Megbízhatóság</h3>
              <p className="text-gray-700 font-montserrat">
                Minden munkánkat időben és pontosan végezzük el, tiszteletben tartva az ügyfél igényeit.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Szakértelem</h3>
              <p className="text-gray-700 font-montserrat">
                Folyamatosan fejlesztjük tudásunkat és követjük az új technológiákat.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 font-raleway">Lépjen kapcsolatba velünk</h2>
          <p className="text-gray-700 text-lg mb-8 font-montserrat">
            Ha szeretné megismerni részletesebb munkáinkat vagy felmérni egy új projektet,
            keressen minket bizalommal.
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