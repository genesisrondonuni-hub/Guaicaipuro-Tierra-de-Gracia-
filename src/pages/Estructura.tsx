import { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Search, 
  ChevronRight, 
  Scale, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { OFFICES_DATA } from '../data/officesData';
import { ORGANIGRAMA_KPIS } from '../constants';
import { OfficeDepartment } from '../types';
import EducationStructureProposal from '../components/EducationStructureProposal';

export default function Estructura() {
  const [selectedOfficeId, setSelectedOfficeId] = useState<number>(7);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'c99' | 'carr' | 'pol'>('all');

  const selectedOffice: OfficeDepartment = OFFICES_DATA.find(o => o.id === selectedOfficeId) || OFFICES_DATA[0];

  const filteredPositions = selectedOffice.positions.filter(pos => {
    const matchesSearch = pos.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pos.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' ? true : 
                        filterType === 'c99' ? pos.type === 'c99' :
                        filterType === 'carr' ? pos.type === 'carr' :
                        filterType === 'pol' ? pos.type === 'pol' : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="flex flex-col">
      
      {/* Sección 1: Header y Métricas (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
              style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
            >
              <Building2 className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              MODELO MUNICIPAL LIBERAL • VENTE VENEZUELA 2026
            </div>
            <h1 className="mb-4">Organigrama de la Alcaldía de Guaicaipuro</h1>
            <p className="text-lg">
              Estructura oficial de 12 Direcciones y Oficinas con 367 funcionarios clasificados bajo la LEFP y LOPPM. Estado subsidiario esbelto, meritocrático y sin burocracia obrera directa.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/educacion" className="btn-vente-primary">
                <GraduationCap className="w-5 h-5" />
                Dirección de Educación (Despacho 07)
              </Link>
              <Link
                to="/organigrama"
                className="btn-vente-secondary"
              >
                Ver Organigrama Completo Interactivo
              </Link>
            </div>
          </div>

          {/* KPI Stats Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ORGANIGRAMA_KPIS.map((kpi, idx) => (
              <div key={idx} className="vente-card text-center">
                <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>{kpi.val}</div>
                <div className="text-sm font-bold mt-1" style={{ color: 'var(--color-heading)' }}>{kpi.lbl}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--color-text)' }}>{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 2: Organigrama Interactivo (--color-bg-soft) */}
      <section className="vente-section-soft">
        <div className="vente-container space-y-10">
          
          {/* Spotlight Card: Dirección 07 */}
          <div className="vente-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider" style={{ color: 'var(--color-secondary)' }}>
                  <Sparkles className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                  INNOVACIÓN DOCTRINAL • DIRECCIÓN 07
                </div>
                <h2 className="m-0">Dirección de Educación y Capital Intelectual (Tierra de Gracia)</h2>
                <p className="m-0">
                  14 funcionarios técnicos y de confianza dedicados a la libertad de elección escolar, gestión del cheque escolar (voucher), acreditación de escuelas autónomas y auditoría nutricional privada.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => setSelectedOfficeId(7)} className="btn-vente-secondary" style={{ padding: '12px 20px' }}>
                  Cargar Cargos en la Tabla
                </button>
                <Link to="/educacion" className="btn-vente-primary" style={{ padding: '12px 20px' }}>
                  Portal de Educación <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Workspace */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Sidebar: 12 Offices list */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="flex items-center justify-between pb-2 px-1">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-heading)' }}>
                  12 Direcciones y Dependencias
                </span>
                <span 
                  className="text-xs font-bold px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: 'rgba(0, 222, 209, 0.15)', color: 'var(--color-secondary)' }}
                >
                  367 Empleados
                </span>
              </div>

              <div className="space-y-2 max-h-[720px] overflow-y-auto pr-1">
                {OFFICES_DATA.map((office) => {
                  const isSelected = selectedOfficeId === office.id;

                  return (
                    <button
                      key={office.id}
                      onClick={() => setSelectedOfficeId(office.id)}
                      className="w-full text-left p-4 rounded-lg transition-all flex items-center justify-between cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? 'var(--color-primary)' : '#FFFFFF',
                        color: isSelected ? '#FFFFFF' : 'var(--color-heading)',
                        border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                        boxShadow: 'var(--box-shadow)'
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0"
                          style={{
                            backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : 'var(--color-bg-soft)',
                            color: isSelected ? '#FFFFFF' : 'var(--color-heading)'
                          }}
                        >
                          {office.id}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-sm truncate block">{office.name}</span>
                          </div>
                          <div className="text-xs truncate mt-0.5" style={{ color: isSelected ? '#FFFFFF' : 'var(--color-text)' }}>
                            {office.tot} puestos • C99: {office.c99} • Carr: {office.carr} {office.pol > 0 ? `• Pol: ${office.pol}` : ''}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-7 vente-card p-6 sm:p-8 space-y-6">
              <div className="pb-6 space-y-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span 
                    className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                    style={{ backgroundColor: 'rgba(0, 222, 209, 0.12)', color: 'var(--color-secondary)' }}
                  >
                    OFICINA MUNICIPAL {selectedOffice.id < 10 ? `0${selectedOffice.id}` : selectedOffice.id}
                  </span>
                  <div className="flex gap-1.5 text-xs">
                    <span className="px-2.5 py-0.5 rounded font-bold" style={{ backgroundColor: '#222222', color: '#FFFFFF' }}>
                      {selectedOffice.c99} Cargos 99
                    </span>
                    <span className="px-2.5 py-0.5 rounded font-bold" style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-secondary)', border: '1px solid var(--color-border)' }}>
                      {selectedOffice.carr} Carrera
                    </span>
                    {selectedOffice.pol > 0 && (
                      <span className="px-2.5 py-0.5 rounded font-bold" style={{ backgroundColor: 'rgba(0, 222, 209, 0.15)', color: 'var(--color-heading)' }}>
                        {selectedOffice.pol} Policía
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="m-0">{selectedOffice.name}</h2>
                  <p className="mt-2 m-0">{selectedOffice.desc}</p>
                </div>

                <div className="p-4 rounded-lg text-sm" style={{ backgroundColor: 'var(--color-bg-soft)', borderLeft: '4px solid var(--color-primary)' }}>
                  <div className="font-bold uppercase tracking-wider text-xs mb-1" style={{ color: 'var(--color-heading)' }}>Enfoque Estratégico:</div>
                  <p className="m-0">{selectedOffice.focus}</p>
                </div>

                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text)' }}>
                  <Scale className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span><b>Marco Legal:</b> {selectedOffice.legal}</span>
                </div>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text)' }} />
                  <input
                    type="text"
                    placeholder={`Buscar en ${selectedOffice.name}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none"
                    style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', color: 'var(--color-heading)' }}
                  />
                </div>
                <div className="flex p-1 rounded-lg text-xs font-bold" style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)' }}>
                  {[
                    { id: 'all', label: `Todos (${selectedOffice.positions.length})` },
                    { id: 'c99', label: 'C99' },
                    { id: 'carr', label: 'Carrera' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setFilterType(tab.id as any)}
                      className="px-3 py-1.5 rounded transition-all cursor-pointer"
                      style={{
                        backgroundColor: filterType === tab.id ? 'var(--color-primary)' : 'transparent',
                        color: filterType === tab.id ? '#FFFFFF' : 'var(--color-text)'
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Positions List */}
              <div className="space-y-3">
                {filteredPositions.length === 0 ? (
                  <div className="text-center py-12 text-sm" style={{ color: 'var(--color-text)' }}>
                    No se encontraron puestos que coincidan con la búsqueda.
                  </div>
                ) : (
                  filteredPositions.map((pos, i) => (
                    <div 
                      key={i}
                      className="p-4 rounded-lg flex items-start gap-3.5"
                      style={{ backgroundColor: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: pos.type === 'c99' ? '#222222' : '#FFFFFF',
                          color: pos.type === 'c99' ? '#FFFFFF' : 'var(--color-heading)',
                          border: '1px solid var(--color-border)'
                        }}
                      >
                        {pos.count}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                          <h4 className="font-bold text-sm m-0">{pos.name}</h4>
                          <span 
                            className="text-[10px] px-2 py-0.5 rounded font-bold uppercase"
                            style={{ backgroundColor: '#FFFFFF', color: 'var(--color-secondary)', border: '1px solid var(--color-border)' }}
                          >
                            {pos.tag}
                          </span>
                        </div>
                        <p className="text-xs m-0">{pos.desc}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {selectedOffice.id === 7 && (
                <div className="pt-4 flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(0, 222, 209, 0.1)', border: '1px solid var(--color-primary)' }}>
                  <span className="text-xs font-bold" style={{ color: 'var(--color-heading)' }}>
                    ¿Deseas simular el cheque escolar para tu familia?
                  </span>
                  <Link to="/educacion#simulador" className="btn-vente-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                    Abrir Simulador <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

            </div>
          </div>

          {/* Propuesta Detallada: Sub-estructura y Organigrama de la Dirección de Educación (Fomento) */}
          <div id="propuesta-educacion" className="pt-6 scroll-mt-24">
            <EducationStructureProposal />
          </div>

        </div>
      </section>

      {/* Sección 3: Fundamentación Jurídica (--color-bg-light) */}
      <section className="vente-section-light">
        <div className="vente-container">
          <div className="mb-8">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--color-secondary)' }}>
              <Scale className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              FUNDAMENTACIÓN JURÍDICA • CONSTITUCIÓN, LOPPM Y LEFP
            </div>
            <h2>Respaldo Legal Venezolano</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="vente-card">
              <h4 className="font-bold text-base mb-2">Constitución de la República (CRBV)</h4>
              <p className="text-sm m-0">
                <b>Art. 141, 146, 168 y 178 (num. 6):</b> Autonomía municipal; competencias en preescolar, bibliotecas, salubridad y apoyo a la educación; principio de mérito.
              </p>
            </div>
            <div className="vente-card">
              <h4 className="font-bold text-base mb-2">Doctrina «Tierra de Gracia»</h4>
              <p className="text-sm m-0">
                <b>Libertad Escolar y Subsidio a la Demanda:</b> Desideologización total; entrega de cheques/vouchers escolares a las familias para que elijan libremente el colegio.
              </p>
            </div>
            <div className="vente-card">
              <h4 className="font-bold text-base mb-2">Estatuto de la Función Pública (LEFP)</h4>
              <p className="text-sm m-0">
                <b>Arts. 19, 20 y 21 («Cargos 99»):</b> Clasificación taxativa de Cargos de Alto Nivel (Art. 20) y Confianza (Art. 21). Libre nombramiento y remoción sin inamovilidad.
              </p>
            </div>
            <div className="vente-card">
              <h4 className="font-bold text-base mb-2">Poder Público Municipal (LOPPM)</h4>
              <p className="text-sm m-0">
                <b>Arts. 88, 115-121, 152, 163-170:</b> Potestad del Alcalde para nombrar directores de educación y gabinete; convenios de cogestión con fundaciones y privados.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
