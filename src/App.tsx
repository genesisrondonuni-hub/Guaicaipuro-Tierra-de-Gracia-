/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Principios from './pages/Principios';
import Ejes from './pages/Ejes';
import Estructura from './pages/Estructura';
import Parroquias from './pages/Parroquias';
import Documentacion from './pages/Documentacion';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/principios" element={<Principios />} />
            <Route path="/ejes" element={<Ejes />} />
            <Route path="/estructura" element={<Estructura />} />
            <Route path="/parroquias" element={<Parroquias />} />
            <Route path="/documentacion" element={<Documentacion />} />
          </Routes>
        </main>
        <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white font-bold text-[10px]">VV</div>
              <span className="text-gray-500 font-medium">Guaicaipuro Tierra de Gracia</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2026 Vente Venezuela Guaicaipuro. Libertad, Democracia y Prosperidad.
            </div>
            <div className="flex gap-4">
              <span className="text-sky-600 font-bold text-sm">#VenezuelaTierraDeGracia</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

