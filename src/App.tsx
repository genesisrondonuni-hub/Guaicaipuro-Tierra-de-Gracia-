/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginGate from './components/LoginGate';
import Home from './pages/Home';
import Educacion from './pages/Educacion';
import Principios from './pages/Principios';
import Ejes from './pages/Ejes';
import Estructura from './pages/Estructura';
import Parroquias from './pages/Parroquias';
import Documentacion from './pages/Documentacion';
import VenteLogo from './components/VenteLogo';
import { ExternalLink, ShieldCheck, Globe, ArrowLeft, Download } from 'lucide-react';

const AUTH_STORAGE_KEY = 'guaicaipuro_auth_user';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);
  return null;
}

function OrganigramaViewer() {
  return (
    <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div 
        className="px-6 py-3 flex flex-wrap items-center justify-between gap-4"
        style={{ backgroundColor: '#222222', color: '#FFFFFF', borderBottom: '2px solid var(--color-primary)' }}
      >
        <div className="flex items-center gap-3">
          <Link 
            to="/estructura" 
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--color-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Estructura Municipal
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline" style={{ color: '#CCCCCC' }}>
            Visor Oficial • Organigrama Municipal Guaicaipuro 2026
          </span>
        </div>
        <a
          href="/organigrama-oficial.html"
          download="Organigrama_Guaicaipuro_2026.html"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded"
          style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
        >
          <Download className="w-3.5 h-3.5" />
          Descargar HTML Offline
        </a>
      </div>
      <iframe
        src="/organigrama-oficial.html"
        title="Organigrama Oficial Alcaldía de Guaicaipuro 2026"
        className="w-full flex-grow border-0"
        style={{ minHeight: '820px' }}
      />
    </div>
  );
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    // Sync across tabs if logged out
    const handleStorageChange = () => {
      try {
        const user = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
        setCurrentUser(user);
      } catch {
        // ignore storage errors
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLoginSuccess = (username: string, remember: boolean) => {
    try {
      if (remember) {
        localStorage.setItem(AUTH_STORAGE_KEY, username);
      } else {
        sessionStorage.setItem(AUTH_STORAGE_KEY, username);
      }
    } catch {
      // ignore storage errors
    }
    setCurrentUser(username);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginGate onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar currentUser={currentUser} onLogout={handleLogout} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/principios" element={<Principios />} />
            <Route path="/ejes" element={<Ejes />} />
            <Route path="/estructura" element={<Estructura />} />
            <Route path="/parroquias" element={<Parroquias />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/organigrama" element={<OrganigramaViewer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer Oficial: Fondo #222222, texto blanco, enlaces en --color-primary (#00DED1) */}
        <footer className="vente-footer">
          <div className="vente-container">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12"
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
            >
              
              {/* Brand info */}
              <div className="lg:col-span-2 space-y-4">
                <VenteLogo variant="dark" subtitle="GUAICAIPURO" />
                <p className="text-sm leading-relaxed max-w-sm pt-2" style={{ color: '#CCCCCC' }}>
                  Plan de Gobierno Municipal para la Alcaldía de Guaicaipuro (2025-2029). Basado en los principios liberales de libertad individual, propiedad privada, estado subsidiario y el programa nacional <b>«Venezuela Tierra de Gracia»</b> presidido por María Corina Machado.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--color-primary)' }}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>El Partido de la Libertad • Municipio Guaicaipuro</span>
                </div>
              </div>

              {/* Navigation links */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FFFFFF' }}>
                  Plan de Gobierno
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/principios">
                      Principios Rectores
                    </Link>
                  </li>
                  <li>
                    <Link to="/ejes">
                      6 Ejes de Gobierno
                    </Link>
                  </li>
                  <li>
                    <Link to="/estructura">
                      Estructura Municipal (12 Despachos)
                    </Link>
                  </li>
                  <li>
                    <Link to="/educacion">
                      Educación y Capital Intelectual
                    </Link>
                  </li>
                  <li>
                    <Link to="/parroquias">
                      7 Parroquias Fortalecidas
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentacion">
                      Documentación Oficial
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Parishes shortcuts */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FFFFFF' }}>
                  Parroquias
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: '#CCCCCC' }}>
                  <li>Los Teques (Capital Urbana)</li>
                  <li>San Pedro de los Altos (Agrícola)</li>
                  <li>El Jarillo (Turismo y Frutas)</li>
                  <li>Paracotos (Industrial)</li>
                  <li>Tácata (Puerta del Llano)</li>
                  <li>Cecilio Acosta (Cultural)</li>
                  <li>Altagracia de la Montaña</li>
                </ul>
              </div>

              {/* Official links */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: '#FFFFFF' }}>
                  Canales Oficiales
                </h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a 
                      href="https://www.ventevenezuela.org" 
                      target="_blank" 
                      rel="noreferrer"
                      className="font-bold inline-flex items-center gap-1.5"
                    >
                      <Globe className="w-4 h-4" />
                      ventevenezuela.org <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <Link to="/documentacion">
                      Descarga de Apps (Windows/Android)
                    </Link>
                  </li>
                  <li>
                    <Link to="/organigrama">
                      Organigrama Interactivo
                    </Link>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/genesisrondonuni-hub/Guaicaipuro-Tierra-de-Gracia-" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      Repositorio GitHub Abierto ↗
                    </a>
                  </li>
                  <li className="pt-2 text-xs" style={{ color: '#CCCCCC' }}>
                    <b>Coordinador Liberal:</b><br />
                    Eduardo Avilán — Vente Guaicaipuro
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Credits */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: '#CCCCCC' }}>
              <div>
                © 2026 <b style={{ color: '#FFFFFF' }}>Vente Venezuela</b> • Municipio Guaicaipuro, Estado Miranda. Todos los derechos reservados.
              </div>
              <div className="flex items-center gap-3 font-bold">
                <span style={{ color: 'var(--color-primary)' }}>#TierraDeGracia</span>
                <span>•</span>
                <span style={{ color: 'var(--color-primary)' }}>#HastaElFinal</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
