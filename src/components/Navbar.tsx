import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Home, BookOpen, Layers, LayoutGrid, MapPin, FileText } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Principios', path: '/principios', icon: BookOpen },
    { name: 'Ejes', path: '/ejes', icon: Layers },
    { name: 'Estructura', path: '/estructura', icon: LayoutGrid },
    { name: 'Parroquias', path: '/parroquias', icon: MapPin },
    { name: 'Documentación', path: '/documentacion', icon: FileText },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
                VENTE<br/>VV
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
                Guaicaipuro <span className="text-sky-500">Tierra de Gracia</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-sky-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-sky-500'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
