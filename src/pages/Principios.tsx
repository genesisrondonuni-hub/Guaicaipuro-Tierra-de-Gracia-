import { motion } from 'motion/react';
import { PRINCIPLES } from '../constants';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Map, 
  Users, 
  Scale, 
  CheckCircle2, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Principios() {
  const iconMap: Record<string, any> = {
    Building2,
    TrendingUp,
    ShieldCheck,
    Map,
    Users,
    Scale
  };

  return (
    <div className="flex flex-col">
      {/* Sección 1: Principios Rectores (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              DOCTRINA LIBERAL • EL PARTIDO DE LA LIBERTAD
            </div>
            <h1 className="mb-4">Principios Rectores</h1>
            <p className="text-lg">
              Los pilares éticos, económicos e institucionales que sustentan el plan de gobierno de Vente Venezuela para Guaicaipuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => {
              const IconComponent = iconMap[principle.icon] || Building2;
              return (
                <motion.div
                  key={principle.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="vente-card flex flex-col justify-between"
                  style={{ borderTop: '4px solid var(--color-primary)' }}
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-primary)' }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: 'var(--color-secondary)' }}>
                      Principio 0{principle.id}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-sm m-0">{principle.description}</p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center justify-between text-xs font-bold" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-secondary)' }}>
                    <span>Fundamento Constitucional</span>
                    <span style={{ color: 'var(--color-primary)' }}>CRBV Art. 141-178</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección 2: Aplicación Práctica (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-secondary)' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                APLICACIÓN PRÁCTICA
              </div>
              <h2>El Estado Subsidiario en Acción: Libertad Educativa</h2>
              <p>
                Nuestra propuesta concibe al Estado como una estructura al servicio de la persona. El municipio renuncia al monopolio de la provisión escolar y se concentra en garantizar que cada familia disponga de los recursos (vouchers) para elegir libremente dónde y cómo educar a sus hijos.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text)' }}>
                {[
                  "Reducción radical de la burocracia y cero nómina obrera directa",
                  "El dinero sigue al estudiante en lugar de perderse en ministerios",
                  "Evaluación objetiva y pública del rendimiento académico de las escuelas",
                  "Comedores y mantenimiento contratados a empresas privadas locales auditadas"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold" style={{ color: 'var(--color-heading)' }}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link to="/educacion" className="btn-vente-primary">
                  <GraduationCap className="w-5 h-5" />
                  Explorar la Dirección de Educación <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="vente-card p-8 space-y-6">
              <h4 className="font-bold text-lg pb-3 m-0" style={{ borderBottom: '1px solid var(--color-border)' }}>
                Métricas del Estado Subsidiario
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1" style={{ color: 'var(--color-heading)' }}>
                    <span>Seguridad y Policía (Función Primaria)</span>
                    <span style={{ color: 'var(--color-primary)' }}>56,7%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                    <div className="h-full rounded-full" style={{ width: '56.7%', backgroundColor: 'var(--color-primary)' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1" style={{ color: 'var(--color-heading)' }}>
                    <span>Técnicos de Carrera (Fiscalización y Calidad)</span>
                    <span style={{ color: 'var(--color-secondary)' }}>30,5%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                    <div className="h-full rounded-full" style={{ width: '30.5%', backgroundColor: 'var(--color-secondary)' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1" style={{ color: 'var(--color-heading)' }}>
                    <span>Cargos Políticos y Confianza (Cargos 99)</span>
                    <span style={{ color: 'var(--color-heading)' }}>12,8%</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                    <div className="h-full rounded-full" style={{ width: '12.8%', backgroundColor: '#222222' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1" style={{ color: 'var(--color-heading)' }}>
                    <span>Nómina Obrera Directa</span>
                    <span style={{ color: 'var(--color-primary)' }}>0% (100% Concesionado)</span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                    <div className="h-full rounded-full" style={{ width: '0%', backgroundColor: 'var(--color-primary)' }}></div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg text-xs italic" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                Datos oficiales de la estructura 2026: 367 empleados en total para una administración ágil y despolitizada.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
