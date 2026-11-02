import { motion } from 'motion/react';
import { PARISHES } from '../constants';
import { 
  MapPin, 
  Info, 
  Calendar, 
  Target, 
  Flag, 
  ShieldCheck, 
  Zap, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  BookOpenCheck,
  Shield
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function Parroquias() {
  const [searchParams] = useSearchParams();
  const initialParishId = searchParams.get('parroquia');
  const [selectedParish, setSelectedParish] = useState(
    () => PARISHES.find(p => p.id === initialParishId) || PARISHES[1]
  );

  useEffect(() => {
    const pId = searchParams.get('parroquia');
    if (pId) {
      const found = PARISHES.find(p => p.id === pId);
      if (found) setSelectedParish(found);
    }
  }, [searchParams]);

  const handleSelectParish = (parish: typeof PARISHES[0]) => {
    setSelectedParish(parish);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById('detalle-parroquia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Sección 1: Header (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              GOBIERNO LOCAL • SUBSIDIARIEDAD Y DESCENTRALIZACIÓN
            </div>
            <h1 className="mb-4">Fortalecimiento de las 7 Parroquias</h1>
            <p className="text-lg mb-8">
              Autonomía reforzada, presupuestos participativos directos, descentralización educativa con vouchers y gestión comunitaria eficiente.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Autonomía Reforzada", icon: ShieldCheck },
                { label: "Presupuesto Participativo", icon: Target },
                { label: "Gestión Local Eficiente", icon: Zap },
                { label: "Vouchers y Educación Rural", icon: GraduationCap }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-heading)', border: '1px solid var(--color-border)' }}
                >
                  <item.icon className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Detalle por Parroquia (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Parish List */}
            <div className="lg:col-span-1 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-widest px-1 mb-3" style={{ color: 'var(--color-heading)' }}>
                7 PARROQUIAS DE GUAICAIPURO
              </h3>
              {PARISHES.map((parish) => {
                const isSelected = selectedParish.id === parish.id;
                return (
                  <button
                    key={parish.id}
                    type="button"
                    onClick={() => handleSelectParish(parish)}
                    className="w-full text-left p-4 rounded-lg transition-all cursor-pointer"
                    style={{
                      backgroundColor: isSelected ? 'var(--color-primary)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--color-heading)',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      boxShadow: 'var(--box-shadow)',
                      fontWeight: isSelected ? 700 : 600
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: isSelected ? '#FFFFFF' : 'var(--color-primary)' }} />
                        <span className="text-sm truncate">{parish.name}</span>
                      </div>
                      <span className="text-[10px] font-normal truncate" style={{ color: isSelected ? '#FFFFFF' : 'var(--color-text)' }}>
                        {parish.type.split('-')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}

              <div className="vente-card p-4 mt-6 text-xs space-y-2">
                <div className="font-bold flex items-center gap-1" style={{ color: 'var(--color-heading)' }}>
                  <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  Enlaces Parroquiales Ejecutivos
                </div>
                <p className="m-0 text-xs">
                  6 Enlaces Parroquiales (Cargos 99) atienden de forma directa las demandas vecinales en cada parroquia foránea sin intermediarios.
                </p>
              </div>
            </div>

            {/* Parish Detail */}
            <div id="detalle-parroquia" className="lg:col-span-3 scroll-mt-24">
              <motion.div
                key={selectedParish.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="vente-card p-0 overflow-hidden"
              >
                {/* Header Banner */}
                <div className="p-8" style={{ backgroundColor: '#222222', color: '#FFFFFF', borderBottom: '4px solid var(--color-primary)' }}>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 text-white">{selectedParish.name}</h2>
                      <span 
                        className="text-xs font-bold px-3 py-1 rounded uppercase tracking-wider inline-block"
                        style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
                      >
                        {selectedParish.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase font-bold mb-1" style={{ color: '#CCCCCC' }}>Estatus Municipal</div>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                        <span className="font-bold text-xs" style={{ color: 'var(--color-primary)' }}>Autonomía Fortalecida</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-base max-w-2xl m-0" style={{ color: '#EAEAEA' }}>
                    {selectedParish.description}
                  </p>
                </div>

                <div className="p-6 sm:p-10 space-y-10">

                  {/* Parroquial Education Initiatives Spotlight */}
                  {selectedParish.educationInitiatives && selectedParish.educationInitiatives.length > 0 && (
                    <div className="p-6 rounded-lg space-y-4" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 font-bold text-base" style={{ color: 'var(--color-heading)' }}>
                          <GraduationCap className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                          Iniciativas de Educación y Capital Intelectual en {selectedParish.name}
                        </div>
                        <Link
                          to="/educacion"
                          className="vente-link text-xs flex items-center gap-1 uppercase tracking-wider"
                        >
                          Ver Dirección de Educación <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 pt-1">
                        {selectedParish.educationInitiatives.map((item, i) => (
                          <div key={i} className="p-3 bg-white rounded-lg flex items-start gap-2.5 text-xs" style={{ border: '1px solid var(--color-border)', color: 'var(--color-heading)' }}>
                            <BookOpenCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Time Horizon Plans */}
                  {selectedParish.plans ? (
                    <div className="space-y-10">
                      {/* Short Term */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-primary)' }}>
                            <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold m-0">Plan a Corto Plazo (1er Año)</h3>
                            <p className="text-xs m-0">Acciones prioritarias de impacto inmediato y rehabilitación</p>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedParish.plans.shortTerm.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
                              <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                              <span className="text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Medium Term */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-secondary)' }}>
                            <Target className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold m-0">Plan a Mediano Plazo (2 a 3 Años)</h3>
                            <p className="text-xs m-0">Consolidación de infraestructura, convenios y servicios de calidad</p>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedParish.plans.mediumTerm.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-secondary)' }}>
                              <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                              <span className="text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Long Term */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-soft)', color: '#222222' }}>
                            <Flag className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold m-0">Plan a Largo Plazo (Visión 2029)</h3>
                            <p className="text-xs m-0">Transformación estructural, inversiones sostenibles y polos de desarrollo</p>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {selectedParish.plans.longTerm.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid #222222' }}>
                              <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#222222' }}></div>
                              <span className="text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-20 rounded-lg" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px dashed var(--color-border)' }}>
                      <Info className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-text)' }} />
                      <h3 className="text-xl font-bold">Planes Detallados en Desarrollo</h3>
                      <p className="mt-2">Estamos trabajando en las propuestas específicas para {selectedParish.name}.</p>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
