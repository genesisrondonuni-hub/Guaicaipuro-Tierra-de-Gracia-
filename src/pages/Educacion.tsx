import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Ticket, 
  BookOpenCheck, 
  School, 
  Cpu, 
  LineChart, 
  Utensils, 
  ShieldCheck, 
  Scale, 
  MapPin, 
  Calculator, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  Download, 
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EDUCATION_PILLARS, PARISHES } from '../constants';
import { OFFICES_DATA } from '../data/officesData';
import EducationStructureProposal from '../components/EducationStructureProposal';

export default function Educacion() {
  const eduOffice = OFFICES_DATA.find(o => o.id === 7)!;

  const [selectedParish, setSelectedParish] = useState("los-teques");
  const [numChildren, setNumChildren] = useState(2);
  const [childrenLevels, setChildrenLevels] = useState<string[]>(["primaria", "bachillerato"]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'c99' | 'carr'>('all');
  const [activePillar, setActivePillar] = useState(EDUCATION_PILLARS[0].id);

  const handleChildrenChange = (newCount: number) => {
    setNumChildren(newCount);
    const updated = [...childrenLevels];
    if (newCount > updated.length) {
      for (let i = updated.length; i < newCount; i++) {
        updated.push(i % 2 === 0 ? "primaria" : "bachillerato");
      }
    } else {
      updated.splice(newCount);
    }
    setChildrenLevels(updated);
  };

  const updateChildLevel = (index: number, level: string) => {
    const updated = [...childrenLevels];
    updated[index] = level;
    setChildrenLevels(updated);
  };

  const calculateVoucher = () => {
    const parishData = PARISHES.find(p => p.id === selectedParish);
    const isRural = parishData?.type.includes("Rural") || parishData?.type.includes("Agrícola");
    const ruralTransportBonus = isRural ? 15 : 0;

    const childCosts = childrenLevels.map(lvl => {
      let base = 65;
      if (lvl === "preescolar") base = 60;
      if (lvl === "primaria") base = 70;
      if (lvl === "bachillerato") base = 85;
      return base + ruralTransportBonus;
    });

    const monthlyTotal = childCosts.reduce((acc, curr) => acc + curr, 0);
    return {
      monthlyTotal,
      annualTotal: monthlyTotal * 12,
      childCosts,
      isRural,
      parishName: parishData?.name || ""
    };
  };

  const simResult = calculateVoucher();

  const filteredPositions = eduOffice.positions.filter(pos => {
    if (selectedFilter === 'c99') return pos.type === 'c99';
    if (selectedFilter === 'carr') return pos.type === 'carr';
    return true;
  });

  return (
    <div className="flex flex-col">
      
      {/* Sección 1: Hero (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="max-w-4xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              PLAN DE GOBIERNO MUNICIPAL • DESPACHO Nº 07
            </div>

            <h1 className="mb-6">
              Dirección de Educación y <br />
              <span style={{ color: 'var(--color-primary)' }}>
                Capital Intelectual
              </span>
            </h1>

            <p className="text-lg mb-8 max-w-3xl">
              {eduOffice.desc}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <button
                type="button"
                onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="btn-vente-primary cursor-pointer"
              >
                <Calculator className="w-5 h-5" />
                Simular Cheque Escolar
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('subestructuras-calidad')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="btn-vente-secondary cursor-pointer"
              >
                <GraduationCap className="w-5 h-5" />
                Sub-Estructuras y Calidad
              </button>
              <button
                type="button"
                onClick={() => document.getElementById('estructura-cargos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="btn-vente-secondary cursor-pointer"
              >
                <Users className="w-5 h-5" />
                Ver los 14 Cargos Oficiales
              </button>
              <Link 
                to="/organigrama" 
                className="btn-vente-secondary"
              >
                Organigrama Web ↗
              </Link>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="vente-card">
              <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>{eduOffice.tot}</div>
              <div className="text-sm font-bold mt-1" style={{ color: 'var(--color-heading)' }}>Funcionarios Totales</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text)' }}>4 Confianza (C99) + 10 Carrera</div>
            </div>
            <div className="vente-card">
              <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Voucher</div>
              <div className="text-sm font-bold mt-1" style={{ color: 'var(--color-heading)' }}>Cheque Escolar</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text)' }}>Subsidio a la Demanda</div>
            </div>
            <div className="vente-card">
              <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>0 Obreros</div>
              <div className="text-sm font-bold mt-1" style={{ color: 'var(--color-heading)' }}>Nómina Directa</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text)' }}>Comedores 100% Concesionados</div>
            </div>
            <div className="vente-card">
              <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Trilingüe</div>
              <div className="text-sm font-bold mt-1" style={{ color: 'var(--color-heading)' }}>Formación Global</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--color-text)' }}>Español, Inglés y Robótica/Código</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Simulador del Cheque Escolar (--color-bg-soft) */}
      <section id="simulador" className="vente-section-soft scroll-mt-20">
        <div className="vente-container">
          <div className="vente-card mb-10" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-secondary)' }}>
                  <ShieldCheck className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  DOCTRINA LIBERAL • TIERRA DE GRACIA
                </div>
                <h2 className="text-2xl mb-2">"Subsidio a la demanda, no a la burocracia escolar."</h2>
                <p className="m-0 max-w-3xl">{eduOffice.focus}</p>
              </div>
              <span 
                className="text-xs font-bold px-4 py-2 rounded whitespace-nowrap"
                style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-secondary)', border: '1px solid var(--color-border)' }}
              >
                LEFP Arts. 20-21 • LOPPM Art. 88
              </span>
            </div>
          </div>

          <div className="vente-card p-6 sm:p-10">
            <div className="mb-8 pb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                <h2 className="m-0">Simulador del Cheque Escolar «Tierra de Gracia»</h2>
              </div>
              <p className="m-0">
                Calcula la asignación presupuestaria directa para tu familia según tu parroquia y la etapa escolar de tus hijos. El Estado transfiere el cheque directamente a la institución que tú elijas.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-heading)' }}>
                    1. Selecciona tu Parroquia de Residencia:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {PARISHES.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedParish(p.id)}
                        className="p-3 rounded-lg text-left text-sm transition-all cursor-pointer"
                        style={{
                          border: selectedParish === p.id ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                          backgroundColor: selectedParish === p.id ? 'rgba(0, 222, 209, 0.08)' : 'var(--color-bg-light)',
                          fontWeight: selectedParish === p.id ? 700 : 400,
                          color: 'var(--color-heading)'
                        }}
                      >
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" style={{ color: selectedParish === p.id ? 'var(--color-primary)' : 'var(--color-text)' }} />
                          <span className="truncate">{p.name}</span>
                        </div>
                        <div className="text-[11px] mt-1" style={{ color: 'var(--color-text)' }}>{p.type}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-heading)' }}>
                      2. Número de Hijos Escolarizados:
                    </label>
                    <span className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                      {numChildren} {numChildren === 1 ? 'Hijo' : 'Hijos'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button
                        key={n}
                        onClick={() => handleChildrenChange(n)}
                        className="flex-1 py-2.5 rounded-lg font-bold text-sm transition-all cursor-pointer"
                        style={{
                          backgroundColor: numChildren === n ? 'var(--color-primary)' : 'var(--color-bg-soft)',
                          color: numChildren === n ? '#FFFFFF' : 'var(--color-heading)',
                          border: '1px solid var(--color-border)'
                        }}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-heading)' }}>
                    3. Nivel de Cada Estudiante:
                  </label>
                  <div className="space-y-3">
                    {childrenLevels.map((lvl, idx) => (
                      <div 
                        key={idx} 
                        className="p-3.5 rounded-lg flex flex-wrap items-center justify-between gap-4"
                        style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}
                      >
                        <span className="font-bold text-sm flex items-center gap-2" style={{ color: 'var(--color-heading)' }}>
                          <GraduationCap className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                          Estudiante {idx + 1}
                        </span>
                        <div className="flex gap-1.5">
                          {[
                            { id: 'preescolar', label: 'Preescolar ($60)' },
                            { id: 'primaria', label: 'Básica ($70)' },
                            { id: 'bachillerato', label: 'Bachillerato ($85)' }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              onClick={() => updateChildLevel(idx, opt.id)}
                              className="px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer"
                              style={{
                                backgroundColor: lvl === opt.id ? 'var(--color-primary)' : '#FFFFFF',
                                color: lvl === opt.id ? '#FFFFFF' : 'var(--color-text)',
                                border: '1px solid var(--color-border)'
                              }}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Card */}
              <div 
                className="lg:col-span-5 rounded-lg p-6 sm:p-8 flex flex-col justify-between"
                style={{ backgroundColor: '#222222', color: '#FFFFFF' }}
              >
                <div>
                  <div className="flex items-center justify-between pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                    <span className="text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--color-primary)' }}>
                      Asignación Directa
                    </span>
                    <span 
                      className="text-[10px] px-2.5 py-1 rounded font-bold uppercase"
                      style={{ backgroundColor: 'rgba(0, 222, 209, 0.15)', color: 'var(--color-primary)' }}
                    >
                      VOUCHER FAMILIAR
                    </span>
                  </div>

                  <div className="my-6 space-y-1">
                    <div className="text-xs uppercase tracking-wider" style={{ color: '#CCCCCC' }}>Subsidio Mensual Asignado:</div>
                    <div className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>
                      ${simResult.monthlyTotal} <span className="text-lg font-normal" style={{ color: '#CCCCCC' }}>USD/mes</span>
                    </div>
                    <div className="text-xs pt-1" style={{ color: '#CCCCCC' }}>
                      Garantía de <b className="text-white">${simResult.annualTotal.toLocaleString()} USD anuales</b> en cheque escolar directo.
                    </div>
                  </div>

                  <div className="space-y-2.5 rounded-lg p-4 text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#CCCCCC' }}>Matrícula Escolar Base:</span>
                      <span className="font-bold text-white">${simResult.monthlyTotal - (simResult.isRural ? 15 * numChildren : 0)} USD</span>
                    </div>
                    {simResult.isRural && (
                      <div className="flex justify-between items-center" style={{ color: 'var(--color-primary)' }}>
                        <span>Bono Transporte Rural ({simResult.parishName}):</span>
                        <span className="font-bold">+${15 * numChildren} USD</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#CCCCCC' }}>Comedor Escolar Nutricional:</span>
                      <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Concesión Privada (Incluida)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#CCCCCC' }}>Laboratorio STEM y Robótica:</span>
                      <span className="font-bold text-white">100% Cubierto</span>
                    </div>
                  </div>

                  <div className="mt-5 p-4 rounded-lg text-xs leading-relaxed" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: '#CCCCCC' }}>
                    <div className="font-bold mb-1 flex items-center gap-1.5 text-white">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                      Mecanismo de Pago:
                    </div>
                    Asistencia validada biométricamente en el plantel escolar. La Alcaldía transfiere directamente a la institución acreditada que eligieron los padres.
                  </div>
                </div>

                <div className="mt-6 pt-4 text-[11px] flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.15)', color: '#CCCCCC' }}>
                  <span>Doctrina Vente Venezuela</span>
                  <span className="font-bold" style={{ color: 'var(--color-primary)' }}>Libertad de Elección</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: 6 Pilares Programáticos (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-secondary)' }}>
              PILARES PROGRAMÁTICOS
            </div>
            <h2>La Transformación Educativa en 6 Ejes Fundamentales</h2>
            <p className="mt-2">
              El marco pedagógico, administrativo y tecnológico que implementa la Dirección de Educación y Capital Intelectual dentro del Plan de Gobierno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EDUCATION_PILLARS.map((pillar) => {
              const iconsMap: Record<string, any> = {
                Ticket,
                BookOpenCheck,
                School,
                Cpu,
                LineChart,
                Utensils
              };
              const IconComp = iconsMap[pillar.iconName] || GraduationCap;
              const isSelected = activePillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className="vente-card cursor-pointer flex flex-col justify-between"
                  style={{
                    borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                    borderWidth: isSelected ? '2px' : '1px'
                  }}
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{
                        backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-bg-soft)',
                        color: isSelected ? '#FFFFFF' : 'var(--color-primary)'
                      }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                    <p className="text-xs font-bold mb-3" style={{ color: 'var(--color-secondary)' }}>{pillar.shortDesc}</p>
                    <p className="text-sm m-0">{pillar.fullDesc}</p>
                  </div>

                  <div className="mt-6 pt-4 flex items-center justify-between text-xs" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{pillar.metrics}</span>
                    <ChevronRight className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sección 3.5: Propuesta Estructural Dirección de Educación (Fomento), Sub-estructuras y Calidad Educativa */}
      <section id="subestructuras-calidad" className="vente-section-soft scroll-mt-20">
        <div className="vente-container">
          <EducationStructureProposal />
        </div>
      </section>

      {/* Sección 4: Los 14 Cargos Oficiales (--color-bg-light) */}
      <section id="estructura-cargos" className="vente-section-light scroll-mt-20">
        <div className="vente-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-secondary)' }}>
                <Users className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                DIRECCIÓN 07 • ORGANIGRAMA LIBERAL GUAICAIPURO
              </div>
              <h2 className="m-0">Estructura Oficial y Cargos (14 Funcionarios)</h2>
              <p className="mt-1 max-w-2xl m-0">
                Clasificación técnica conforme a la Ley del Estatuto de la Función Pública (LEFP Arts. 20 y 21). Sin burocracia obrera y libre de cargos clientelares.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex p-1 rounded-lg bg-white" style={{ border: '1px solid var(--color-border)' }}>
              {[
                { id: 'all', label: `Todos (${eduOffice.tot})` },
                { id: 'c99', label: `Cargos 99 (${eduOffice.c99})` },
                { id: 'carr', label: `Carrera (${eduOffice.carr})` }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedFilter(btn.id as any)}
                  className="px-3.5 py-1.5 rounded text-xs font-bold transition-all cursor-pointer"
                  style={{
                    backgroundColor: selectedFilter === btn.id ? 'var(--color-primary)' : 'transparent',
                    color: selectedFilter === btn.id ? '#FFFFFF' : 'var(--color-text)'
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Positions Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredPositions.map((pos, idx) => (
              <div 
                key={idx} 
                className="vente-card flex items-start gap-4"
                style={{ borderLeft: '4px solid var(--color-primary)' }}
              >
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: pos.type === 'c99' ? '#222222' : 'var(--color-bg-soft)',
                    color: pos.type === 'c99' ? '#FFFFFF' : 'var(--color-heading)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  {pos.count}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm truncate m-0">{pos.name}</h4>
                    <span 
                      className="text-[10px] px-2 py-0.5 rounded font-bold uppercase whitespace-nowrap"
                      style={{
                        backgroundColor: pos.type === 'c99' ? 'rgba(0, 222, 209, 0.15)' : 'var(--color-bg-soft)',
                        color: pos.type === 'c99' ? 'var(--color-secondary)' : 'var(--color-text)'
                      }}
                    >
                      {pos.tag}
                    </span>
                  </div>
                  <p className="text-xs m-0">{pos.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              <span><b>Fundamento Legal:</b> {eduOffice.legal}</span>
            </div>
            <div className="flex gap-2">
              <span className="bg-white px-2.5 py-1 rounded" style={{ border: '1px solid var(--color-border)' }}>Alto Nivel: 1</span>
              <span className="bg-white px-2.5 py-1 rounded" style={{ border: '1px solid var(--color-border)' }}>Confianza: 3</span>
              <span className="bg-white px-2.5 py-1 rounded" style={{ border: '1px solid var(--color-border)' }}>Carrera Profesional: 10</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Contraste de Modelos (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="font-bold text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-secondary)' }}>
              CONTRASTE DE MODELOS
            </div>
            <h2>¿Por Qué la Educación Liberal?</h2>
            <p className="mt-2">
              Comparativa entre el colapso del sistema centralizado y la solución de Vente Venezuela.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="vente-card space-y-4" style={{ borderTop: '4px solid #EF4444' }}>
              <div className="font-bold text-lg pb-3" style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-heading)' }}>
                ❌ Modelo Colectivista Centralizado
              </div>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text)' }}>
                <li><b>Monopolio estatal:</b> La familia obligada a enviar al niño a la escuela que el Estado designa.</li>
                <li><b>Adoctrinamiento político:</b> Textos escolares ideologizados sin rigor histórico ni científico.</li>
                <li><b>Docentes precarizados:</b> Salarios de $15-$25 sin incentivos por mérito ni rendimiento.</li>
                <li><b>Burocracia obrera ficticia:</b> Nóminas parásitas mientras las escuelas carecen de agua y luz.</li>
                <li><b>Abolición de exámenes:</b> Prohibición de medir el aprendizaje para ocultar la debacle educativa.</li>
              </ul>
            </div>

            <div className="vente-card space-y-4" style={{ borderTop: '4px solid var(--color-primary)' }}>
              <div className="font-bold text-lg pb-3" style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-heading)' }}>
                ✅ Modelo Liberal «Tierra de Gracia»
              </div>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--color-text)' }}>
                <li><b>Voucher / Cheque Escolar:</b> La familia elige libremente entre escuelas autónomas o privadas.</li>
                <li><b>Trilingüismo y STEM:</b> Español, Inglés y Robótica/Código para insertar a los jóvenes en el mundo.</li>
                <li><b>Meritocracia docente:</b> Salarios dignos competitivos y bonos por resultados de aprendizaje.</li>
                <li><b>Mantenimiento concesionado:</b> 0 obreros en nómina municipal; empresas privadas licitadas.</li>
                <li><b>Evaluación estandarizada:</b> Pruebas anuales públicas de rendimiento para auditar la calidad.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Despliegue en las 7 Parroquias (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container">
          <div className="max-w-3xl mb-10">
            <div className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-secondary)' }}>
              DESCENTRALIZACIÓN MUNICIPAL
            </div>
            <h2>Despliegue Educativo en las 7 Parroquias de Guaicaipuro</h2>
            <p className="mt-1">
              Iniciativas concretas para atender las realidades de cada rincón de nuestro municipio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARISHES.map((parish) => (
              <div key={parish.id} className="vente-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-base m-0">{parish.name}</h3>
                    <span 
                      className="text-[10px] px-2 py-0.5 rounded font-bold"
                      style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-secondary)' }}
                    >
                      {parish.type}
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs mb-4" style={{ color: 'var(--color-text)' }}>
                    {parish.educationInitiatives?.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/parroquias" 
                  className="vente-link text-xs pt-3 flex items-center gap-1"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  Ver plan completo de {parish.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
