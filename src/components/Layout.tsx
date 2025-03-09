import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </div>
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-raleway text-amber-800">Ács Mester</h3>
              <p className="text-gray-300 font-montserrat text-base leading-relaxed">
                Minőségi tetőfedő és bádogos munkák, kedvező áron. Több mint 20 éves szakmai tapasztalattal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-raleway text-amber-800">Elérhetőség</h3>
              <p className="text-gray-300 font-montserrat text-base mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +36 30 654 7947
              </p>
              <p className="text-gray-300 font-montserrat text-base mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Ferencz Máté
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-raleway text-amber-800">Szolgáltatási területek</h3>
              <p className="text-gray-300 font-montserrat text-base leading-relaxed flex items-start">
                <svg className="w-5 h-5 mr-2 text-amber-800 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Csongrád megye, Szeged és környéke
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-montserrat">&copy; {new Date().getFullYear()} Ács Mester. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 