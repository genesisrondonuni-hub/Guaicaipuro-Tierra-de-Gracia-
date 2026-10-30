import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Layers, 
  LayoutGrid, 
  MapPin, 
  FileText, 
  GraduationCap, 
  Sparkles,
  LogOut
} from 'lucide-react';
import { useState } from 'react';
import VenteLogo from './VenteLogo';

interface NavItem {
  name: string;
  path: string;
  icon: any;
  badge?: string;
}

interface NavbarProps {
  currentUser?: string | null;
  onLogout?: () => void;
}

export default function Navbar({ currentUser, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Principios', path: '/principios', icon: BookOpen },
    { name: 'Ejes del Plan', path: '/ejes', icon: Layers },
    { name: 'Estructura Municipal', path: '/estructura', icon: LayoutGrid },
    { name: 'Educación', path: '/educacion', icon: GraduationCap },
    { name: '7 Parroquias', path: '/parroquias', icon: MapPin },
    { name: 'Descargas', path: '/documentacion', icon: FileText },
  ];

  return (
    <header className="vente-navbar">
      <nav className="vente-container">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <VenteLogo subtitle="GUAICAIPURO" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`vente-nav-link ${isActive ? 'active' : ''}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span 
                      className="ml-1 text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Primary CTA Button & Logout */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to="/educacion#simulador"
              className="btn-vente-primary"
              style={{ padding: '10px 18px', fontSize: '13px' }}
            >
              <Sparkles className="w-4 h-4" />
              Simular Voucher
            </Link>
            {onLogout && (
              <button
                onClick={onLogout}
                title={currentUser ? `Sesión activa: ${currentUser} — Haz clic para salir` : 'Cerrar sesión'}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold border transition-colors hover:bg-gray-100 cursor-pointer"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-heading)',
                }}
              >
                <LogOut className="w-4 h-4" style={{ color: 'var(--color-secondary)' }} />
                <span className="hidden xl:inline">Salir</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg focus:outline-none"
              style={{ color: 'var(--color-heading)' }}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" style={{ color: 'var(--color-primary)' }} /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white px-6 pt-2 pb-6 space-y-2"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`vente-nav-link w-full justify-between ${isActive ? 'active' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span 
                    className="text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                    style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
          
          <div className="pt-4 space-y-2.5" style={{ borderTop: '1px solid var(--color-border)' }}>
            <Link
              to="/educacion#simulador"
              onClick={() => setIsOpen(false)}
              className="btn-vente-primary w-full"
            >
              Simular Voucher Educativo
            </Link>
            {onLogout && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold border"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-heading)',
                  backgroundColor: '#F8F8F8',
                }}
              >
                <LogOut className="w-4 h-4" style={{ color: 'var(--color-secondary)' }} />
                <span>Cerrar Sesión ({currentUser || 'Usuario'})</span>
              </button>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
}
