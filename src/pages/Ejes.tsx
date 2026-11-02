import { motion } from 'motion/react';
import { AXES } from '../constants';
import { CheckCircle2, ChevronRight, GraduationCap, ArrowRight, Sparkles, Shield } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ejes() {
  const [activeAxis, setActiveAxis] = useState(AXES[0].id);

  return (
    <div className="flex flex-col">
      {/* Sección 1: Ejes Estratégicos (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              PLAN DE GOBIERNO MUNICIPAL • VENTE VENEZUELA 2025-2029
            </div>
            <h1 className="mb-4">Seis Ejes de Política Liberal</h1>
            <p className="text-lg">
              Nuestra hoja de ruta integral para alcanzar la Libertad, la Democracia y la Prosperidad en Guaicaipuro.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-3">
              {AXES.map((axis) => {
                const isEduAxis = axis.id === 3;
                const isSelected = activeAxis === axis.id;

                return (
                  <button
                    key={axis.id}
                    onClick={() => setActiveAxis(axis.id)}
                    className="w-full text-left p-4 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                    style={{
                      backgroundColor: isSelected ? 'var(--color-primary)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--color-heading)',
                      border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      boxShadow: 'var(--box-shadow)'
                    }}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-2">
                      <span className="text-base font-bold flex-shrink-0" style={{ color: isSelected ? '#FFFFFF' : 'var(--color-primary)' }}>
                        0{axis.id}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-sm truncate">{axis.title}</span>
                          {isEduAxis && (
                            <span 
                              className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase"
                              style={{
                                backgroundColor: isSelected ? '#222222' : 'var(--color-bg-soft)',
                                color: isSelected ? '#FFFFFF' : 'var(--color-secondary)'
                              }}
                            >
                              Educación
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              {AXES.map((axis) => (
                activeAxis === axis.id && (
                  <motion.div
                    key={axis.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="vente-card p-6 sm:p-10 space-y-8"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--color-secondary)' }}>
                          EJE ESTRATÉGICO 0{axis.id}
                        </span>
                        {axis.id === 3 && (
                          <span 
                            className="text-xs font-bold px-2.5 py-1 rounded flex items-center gap-1"
                            style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
                          >
                            <Sparkles className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                            Dirección de Educación y Capital Intelectual
                          </span>
                        )}
                      </div>
                      <h2 className="mb-3">{axis.title}</h2>
                      <p className="m-0">{axis.description}</p>
                    </div>

                    {/* Key Proposals */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold pb-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                        Propuestas Clave del Eje
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {axis.details.map((detail, i) => (
                          <div 
                            key={i} 
                            className="flex gap-3 p-4 rounded-lg"
                            style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}
                          >
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                            <span className="text-sm font-semibold" style={{ color: 'var(--color-heading)' }}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Long Description */}
                    {axis.longDescription && (
                      <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                        <h4 className="font-bold mb-2 uppercase tracking-wider text-xs" style={{ color: 'var(--color-secondary)' }}>
                          Explicación Doctrinal y Operativa:
                        </h4>
                        <p className="text-sm m-0">{axis.longDescription}</p>
                      </div>
                    )}

                    {/* Education Impact Specific Card */}
                    {axis.educationImpact && (
                      <div className="p-6 rounded-lg space-y-3" style={{ backgroundColor: '#222222', color: '#FFFFFF' }}>
                        <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--color-primary)' }}>
                          <GraduationCap className="w-5 h-5" />
                          Impacto en la Educación y Capital Intelectual:
                        </div>
                        <p className="text-sm m-0" style={{ color: '#CCCCCC' }}>
                          {axis.educationImpact}
                        </p>
                        {axis.id === 3 && (
                          <div className="pt-2">
                            <Link
                              to="/educacion"
                              className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                              style={{ color: 'var(--color-primary)' }}
                            >
                              Conocer a fondo la Dirección de Educación y simular Vouchers <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="pt-4 flex items-center justify-between text-xs" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                      <span>Plan Municipal «Guaicaipuro Tierra de Gracia»</span>
                      <span className="font-bold" style={{ color: 'var(--color-secondary)' }}>Vente Venezuela • El Partido de la Libertad</span>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
