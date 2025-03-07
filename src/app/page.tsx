import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[600px] mb-16 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="/pictures/IMG_0927.JPG"
          alt="Ács munkája"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-raleway">
              Minőségi ács munkák
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-montserrat">
              Szakértő ács szolgáltatások a legmagasabb minőségben
            </p>
            <Link
              href="/szolgaltatasok"
              className="bg-amber-800 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block font-montserrat"
            >
              Szolgáltatásaink
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Szakértelem</h3>
          <p className="text-gray-700 font-montserrat">
            Több éves tapasztalattal rendelkezünk az ács szakmában, garantálva a kiváló minőséget.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Megbízhatóság</h3>
          <p className="text-gray-700 font-montserrat">
            Minden munkánkat precízen, időben és megbízhatóan végezzük el.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-raleway">Minőség</h3>
          <p className="text-gray-700 font-montserrat">
            Csak a legjobb minőségű anyagokat használjuk, hogy tartós munkát nyújthassunk.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-800 text-white p-12 rounded-2xl text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-raleway">
          Készítsünk valami szépet együtt!
        </h2>
        <p className="text-xl mb-8 text-white font-montserrat">
          Keressen minket bizalommal, segítünk megvalósítani az ön elképzeléseit.
        </p>
        <Link
          href="/munkak"
          className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block font-montserrat"
        >
          Nézzük meg a munkáinkat
        </Link>
      </div>
    </Layout>
  );
}
