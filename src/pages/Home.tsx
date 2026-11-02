import { motion } from 'motion/react';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Ticket, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  ChevronRight,
  Layers,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ORGANIGRAMA_KPIS } from '../constants';
import VenteLogo from '../components/VenteLogo';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Sección 1: Hero (--color-bg-light, 80px vertical padding) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Logo Oficial de Vente Venezuela */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-4 px-8 rounded-lg inline-flex items-center"
              style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}
            >
              <VenteLogo variant="colored" size="lg" subtitle="ESTADO MIRANDA" />
            </motion.div>

            {/* Insignia institucional */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }}></span>
              EL PARTIDO DE LA LIBERTAD • GUAICAIPURO
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              Guaicaipuro <br />
              <span style={{ color: 'var(--color-primary)' }}>
                Tierra de Gracia
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl mx-auto mb-10"
            >
              Plan de Gobierno Municipal 2025-2029: Un modelo liberal de Estado subsidiario, respeto sagrado a la propiedad privada, <b>vouchers educativos</b> a la demanda y 7 parroquias descentralizadas y libres.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 w-full"
            >
              <Link to="/ejes" className="btn-vente-primary">
                <Layers className="w-5 h-5" />
                Ejes del Plan de Gobierno
              </Link>
              <Link to="/estructura" className="btn-vente-secondary">
                <Building2 className="w-5 h-5" />
                Estructura Municipal (12 Despachos)
              </Link>
              <Link to="/educacion" className="btn-vente-secondary">
                <GraduationCap className="w-5 h-5" />
                Educación y Capital Intelectual
              </Link>
              <Link to="/parroquias" className="btn-vente-secondary">
                <MapPin className="w-5 h-5" />
                7 Parroquias
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Sección 2: Métricas Oficiales (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-secondary)' }}>
              MÉTRICAS OFICIALES DE LA ADMINISTRACIÓN MUNICIPAL LIBERAL • CORTE 2026
            </span>
            <h2 className="mt-2">Un Estado Subsidiario Esbelto y Eficiente</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ORGANIGRAMA_KPIS.map((kpi, idx) => (
              <div key={idx} className="vente-card text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>
                  {kpi.val}
                </div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-heading)' }}>
                  {kpi.lbl}
                </div>
                <div className="text-xs mt-1" style={{ color: 'var(--color-text)' }}>
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Revolución Educativa Liberal (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-secondary)' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                EJE 03 • CAPITAL INTELECTUAL Y BIENESTAR HUMANO
              </div>
              <h2>
                Educación y Capital Intelectual: Cheque Escolar y Libertad de Cátedra
              </h2>
              <p>
                En Guaicaipuro, el dinero público financiará al <b>estudiante</b>, no a la burocracia política. A través de la <b>Dirección de Educación y Capital Intelectual</b> (Despacho 07 de la estructura municipal), las familias recibirán vouchers mensuales directos para escoger la escuela de su preferencia, con rigor científico, robótica, inglés y <b>cero adoctrinamiento</b>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Cheque escolar directo a las familias guaicaipureñas",
                  "Desideologización inmediata de todos los textos escolares",
                  "Escuelas autónomas cogestionadas con universidades",
                  "Trilingüismo: Español, Inglés y Lenguaje Digital / Robótica",
                  "0 obreros directos: Comedores escolares 100% concesionados",
                  "Evaluaciones estandarizadas anuales con resultados abiertos"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--color-text)' }}>
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/educacion" className="btn-vente-primary">
                  <Ticket className="w-5 h-5" />
                  Simular Asignación del Voucher
                </Link>
                <Link to="/estructura" className="btn-vente-secondary">
                  Ver los 14 Cargos Oficiales
                </Link>
              </div>
            </div>

            {/* Tarjeta Ficha Resumen Dirección 07 */}
            <div className="lg:col-span-5 vente-card space-y-5">
              <div className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <span className="text-xs font-bold uppercase" style={{ color: 'var(--color-secondary)' }}>
                  DIRECCIÓN 07 • ORGANIGRAMA OFICIAL
                </span>
                <span 
                  className="text-xs font-bold px-2.5 py-0.5 rounded uppercase"
                  style={{ backgroundColor: 'var(--color-primary)', color: '#FFFFFF' }}
                >
                  14 Cargos
                </span>
              </div>

              <h3 className="text-xl font-bold" style={{ color: 'var(--color-heading)' }}>
                Dirección de Educación y Capital Intelectual
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded flex justify-between" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                  <span>Cargos de Confianza (C99):</span>
                  <span className="font-bold" style={{ color: 'var(--color-heading)' }}>4 Funcionarios</span>
                </div>
                <div className="p-3 rounded flex justify-between" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                  <span>Carrera Profesional Técnica:</span>
                  <span className="font-bold" style={{ color: 'var(--color-secondary)' }}>10 Funcionarios</span>
                </div>
                <div className="p-3 rounded flex justify-between" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                  <span>Nómina Obrera Directa:</span>
                  <span className="font-bold" style={{ color: 'var(--color-primary)' }}>0 Obreros (100% Concesionado)</span>
                </div>
                <div className="p-3 rounded flex justify-between" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                  <span>Fundamento Legal:</span>
                  <span className="font-bold" style={{ color: 'var(--color-heading)' }}>CRBV Art. 178 • LOPPM 88</span>
                </div>
              </div>

              <p className="text-xs italic text-center pt-2" style={{ color: 'var(--color-secondary)' }}>
                "El voucher financia al alumno en el colegio elegido por su familia"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sección 4: Doctrina Liberal (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-secondary)' }}>
                <Shield className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                DOCTRINA LIBERAL • VENTE VENEZUELA
              </div>
              <h2>
                Un Estado Municipal Esbelto al Servicio del Ciudadano
              </h2>
              <p>
                Adecuar la estructura organizativa de la Alcaldía de Guaicaipuro a los principios de un gobierno liberal, eficiente y subsidiario, en línea con el ideario de Vente Venezuela y el plan nacional <b>«Venezuela Tierra de Gracia»</b>.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Shield, title: "Seguridad Jurídica y Respeto a la Propiedad", desc: "Cero expropiaciones. Reglas claras para inversiones nacionales y extranjeras." },
                  { icon: TrendingUp, title: "Economía de Libre Mercado y APPs", desc: "Concesiones transparentes en aseo urbano, vialidad y servicios." },
                  { icon: GraduationCap, title: "Libertad Escolar y Subsidio a la Demanda", desc: "El cheque escolar empodera a los padres frente al monopolio estatal." },
                  { icon: Users, title: "Estado Subsidiario", desc: "El municipio solo interviene donde los ciudadanos y el mercado no pueden llegar." }
                ].map((item, i) => (
                  <div key={i} className="vente-card flex items-start gap-4">
                    <item.icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                    <div>
                      <h4 className="font-bold text-base mb-1">{item.title}</h4>
                      <p className="text-sm m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarjeta de Cita */}
            <div className="vente-card space-y-6">
              <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <VenteLogo variant="colored" subtitle="GUAICAIPURO" />
                <span className="text-xs font-bold uppercase" style={{ color: 'var(--color-secondary)' }}>Plan Oficial</span>
              </div>

              <p className="italic text-lg" style={{ color: 'var(--color-heading)' }}>
                "Venezuela Tierra de Gracia potenciará la innovación y la productividad en todos los sectores; impulsará el desarrollo de nuevas industrias y el uso de tecnologías para ser competitivos en la era digital. Ese es el futuro luminoso que nos aguarda cuando logremos liberar a Venezuela."
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <div className="font-bold text-base" style={{ color: 'var(--color-heading)' }}>María Corina Machado</div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--color-secondary)' }}>Líder Nacional • Vente Venezuela</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm" style={{ color: 'var(--color-heading)' }}>Eduardo Avilán</div>
                  <div className="text-xs" style={{ color: 'var(--color-text)' }}>Coordinador Liberal Guaicaipuro</div>
                </div>
              </div>

              <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <Link to="/principios" className="btn-vente-primary w-full">
                  Conoce los 6 Principios Rectores
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección 5: Estructura Integral del Plan de Gobierno (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2>Estructura del Plan de Gobierno Municipal</h2>
            <p className="mt-2">
              Un programa articulado en doctrina, ejes estratégicos, organigrama institucional, políticas educativas y descentralización territorial.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Principios Rectores", 
                desc: "Los 6 pilares de la doctrina liberal: libertad individual, propiedad sagrada y Estado subsidiario.", 
                link: "/principios", 
                tag: "Doctrina Liberal"
              },
              { 
                title: "6 Ejes de Gobierno", 
                desc: "Líneas estratégicas: Estado de derecho, economía de mercado, capital humano, urbanismo e infraestructura.", 
                link: "/ejes", 
                tag: "Líneas Estratégicas"
              },
              { 
                title: "Estructura Municipal", 
                desc: "12 despachos directivos y 367 funcionarios clasificados según la LEFP y LOPPM. 0 obreros directos.", 
                link: "/estructura", 
                tag: "Organigrama 2026"
              },
              { 
                title: "Educación y Capital Intelectual", 
                desc: "Despacho 07: Subsidio a la demanda mediante cheques escolares, autonomía pedagógica y ciencia.", 
                link: "/educacion", 
                tag: "Política Educativa"
              },
              { 
                title: "7 Parroquias Fortalecidas", 
                desc: "Presupuestos participativos y autonomía real para Los Teques, San Pedro, El Jarillo, Paracotos y más.", 
                link: "/parroquias", 
                tag: "Descentralización"
              },
              { 
                title: "Documentación y Descargas", 
                desc: "Marco legal (CRBV, LOPPM, LEFP), organigrama interactivo universal y aplicaciones oficiales.", 
                link: "/documentacion", 
                tag: "Transparencia Abierta"
              }
            ].map((card, i) => (
              <Link 
                key={i}
                to={card.link}
                className="vente-card flex flex-col justify-between group no-underline"
              >
                <div>
                  <span 
                    className="inline-block text-[11px] font-bold uppercase px-2.5 py-1 rounded mb-3"
                    style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-secondary)' }}
                  >
                    {card.tag}
                  </span>
                  <h4 className="text-lg font-bold mb-2">{card.title}</h4>
                  <p className="text-sm m-0">{card.desc}</p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between text-sm font-bold" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-link)' }}>
                  <span>Explorar sección</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
