import { 
  FileText, 
  Download, 
  Github, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Globe, 
  Sparkles,
  ShieldCheck,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentacion() {
  const officialPackages = [
    {
      title: "Organigrama Universal Web (HTML5 / PWA)",
      filename: "Organigrama_Guaicaipuro_Universal_41ee4ea3.zip",
      path: "/assets/aistudio/Organigrama_Guaicaipuro_Universal_41ee4ea3.zip",
      size: "23 KB",
      icon: Globe,
      desc: "Versión universal ejecutable en cualquier navegador moderno. Incluye PWA offline, servidor HTTP en Python y scripts multiplataforma."
    },
    {
      title: "Organigrama para Windows (Portable + .exe)",
      filename: "Organigrama_Guaicaipuro_Windows_f824215a.zip",
      path: "/assets/aistudio/Organigrama_Guaicaipuro_Windows_f824215a.zip",
      size: "21 KB",
      icon: Monitor,
      desc: "Lanzador nativo Windows (.exe, .cmd, .bat y .vbs silencioso). Listo para abrir con doble clic sin instalación previa."
    },
    {
      title: "Organigrama para Android (PWA + Guía)",
      filename: "Organigrama_Guaicaipuro_Android_132ed795.zip",
      path: "/assets/aistudio/Organigrama_Guaicaipuro_Android_132ed795.zip",
      size: "19 KB",
      icon: Smartphone,
      desc: "Optimizado para teléfonos y tabletas Android. Incluye manifiesto PWA, iconos táctiles y guía paso a paso de instalación local."
    }
  ];

  return (
    <div className="flex flex-col">
      
      {/* Sección 1: Header y Visor Standalone (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              DESCARGAS Y TRANSPARENCIA • VENTE VENEZUELA
            </div>
            <h1 className="mb-4">Descargas y Documentación Oficial</h1>
            <p className="text-lg">
              Descarga los paquetes compilados del Organigrama Municipal, los documentos del plan de gobierno y accede al código fuente libre del proyecto.
            </p>
          </div>

          {/* Standalone Interactive Viewer Banner */}
          <div className="vente-card p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase" style={{ color: 'var(--color-secondary)' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                ORGANIGRAMA STANDALONE WEB
              </div>
              <h2 className="m-0">Organigrama Interactivo Oficial en Línea</h2>
              <p className="m-0">
                Puedes abrir directamente la versión interactiva autónoma del Organigrama de Guaicaipuro corte 2026 sin descargar ningún archivo adicional.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/organigrama"
                className="btn-vente-primary whitespace-nowrap"
              >
                Abrir Visor Interactivo <ExternalLink className="w-4 h-4" />
              </Link>
              <a
                href="/organigrama-oficial.html"
                download="Organigrama_Guaicaipuro_2026.html"
                className="btn-vente-secondary whitespace-nowrap"
              >
                Descargar HTML <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Paquetes Oficiales (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <h2 className="m-0">Paquetes Oficiales del Organigrama para Descarga</h2>
              <p className="mt-1 m-0">
                Archivos compilados listos para distribución comunitaria y uso offline en las 7 parroquias.
              </p>
            </div>
            <span 
              className="text-xs font-bold px-3 py-1 rounded self-start sm:self-auto"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              3 Paquetes Verificados
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {officialPackages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <div key={i} className="vente-card flex flex-col justify-between">
                  <div>
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-base m-0">{pkg.title}</h3>
                      <span className="text-xs font-bold" style={{ color: 'var(--color-text)' }}>{pkg.size}</span>
                    </div>
                    <p className="text-sm mb-6">{pkg.desc}</p>
                  </div>

                  <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <a
                      href={pkg.path}
                      download={pkg.filename}
                      className="btn-vente-secondary w-full"
                      style={{ padding: '12px 20px', fontSize: '13px' }}
                    >
                      <Download className="w-4 h-4" />
                      Descargar {pkg.filename.split('_')[2]} (.zip)
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección 3: Documentos y GitHub (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Plan Documents */}
            <div className="vente-card p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-primary)' }}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold m-0">Documentos del Plan de Gobierno</h2>
                  <p className="text-xs m-0">Fundamentación programática y legal municipal</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "Dirección de Educación y Capital Intelectual (Tierra de Gracia)", size: "Oficial 2026", type: "Vouchers", highlight: true },
                  { title: "Plan de Gobierno Municipal - Alcaldía de Guaicaipuro 2025-2029", size: "Completo", type: "Doctrina" },
                  { title: "Venezuela Tierra de Gracia (Programa de Gobierno Presidencial)", size: "85 Páginas", type: "Nacional" },
                  { title: "Plan de Desarrollo Parroquial: San Pedro Tierra de Gracia", size: "Local", type: "Parroquia" }
                ].map((doc, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{
                      backgroundColor: doc.highlight ? 'rgba(0, 222, 209, 0.08)' : 'var(--color-bg-soft)',
                      border: doc.highlight ? '1px solid var(--color-primary)' : '1px solid var(--color-border)'
                    }}
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <span 
                        className="font-bold text-[10px] px-2 py-1 rounded uppercase tracking-wider"
                        style={{
                          backgroundColor: doc.highlight ? 'var(--color-primary)' : '#FFFFFF',
                          color: doc.highlight ? '#FFFFFF' : 'var(--color-secondary)',
                          border: doc.highlight ? 'none' : '1px solid var(--color-border)'
                        }}
                      >
                        {doc.type}
                      </span>
                      <div className="min-w-0">
                        <div className="font-bold text-sm truncate" style={{ color: 'var(--color-heading)' }}>{doc.title}</div>
                        <div className="text-xs" style={{ color: 'var(--color-text)' }}>{doc.size}</div>
                      </div>
                    </div>
                    {doc.highlight ? (
                      <Link
                        to="/educacion"
                        className="vente-link text-xs flex items-center gap-1 uppercase"
                      >
                        Ver <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <button className="p-2 cursor-pointer" style={{ color: 'var(--color-primary)' }}>
                        <Download className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub & Open Data */}
            <div className="vente-card p-8 space-y-6" style={{ backgroundColor: '#222222', color: '#FFFFFF' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'var(--color-primary)' }}>
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white m-0">Transparencia y Repositorio GitHub</h2>
                  <p className="text-xs m-0" style={{ color: '#CCCCCC' }}>Auditoría ciudadana y código abierto</p>
                </div>
              </div>
              
              <p className="text-sm m-0" style={{ color: '#CCCCCC' }}>
                Este portal municipal y toda su estructura de datos son de código abierto. Cualquier ciudadano, docente u organización puede inspeccionar y auditar las métricas de la Alcaldía.
              </p>

              <div className="p-5 rounded-lg space-y-3" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>Repositorio Asignado</span>
                  <span className="text-[10px] px-2 py-0.5 rounded font-bold" style={{ backgroundColor: 'rgba(0, 222, 209, 0.15)', color: 'var(--color-primary)' }}>Público</span>
                </div>
                <div className="text-xs p-2.5 rounded truncate" style={{ backgroundColor: '#111111', color: '#EAEAEA', border: '1px solid rgba(255,255,255,0.1)' }}>
                  https://github.com/genesisrondonuni-hub/Guaicaipuro-Tierra-de-Gracia-.git
                </div>
                <a
                  href="https://github.com/genesisrondonuni-hub/Guaicaipuro-Tierra-de-Gracia-"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-vente-primary w-full"
                >
                  Abrir Repositorio en GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-4 rounded-lg text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#CCCCCC' }}>
                <ShieldCheck className="w-4 h-4 inline mr-1.5" style={{ color: 'var(--color-primary)' }} />
                Compromiso de caja de cristal: 100% de los datos de licitaciones de comedores escolares, compras y nómina municipal en datos abiertos.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
