import { useState } from 'react';
import { 
  GraduationCap, 
  BarChart3, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Award, 
  Compass, 
  Building2, 
  Users, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Calculator,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function EducationStructureProposal() {
  const [activeTab, setActiveTab] = useState<'subestructuras' | 'calidad' | 'pmi' | 'simulador'>('subestructuras');
  const [selectedUnit, setSelectedUnit] = useState<number | null>(0);
  
  // Simulador de Cheque Escolar
  const [numHijos, setNumHijos] = useState<number>(2);
  const [nivelEducativo, setNivelEducativo] = useState<'inicial' | 'primaria' | 'secundaria' | 'tecnica'>('primaria');
  const [tipoGestion, setTipoGestion] = useState<'privada' | 'subvencionada' | 'municipal'>('subvencionada');

  const montosBase: Record<string, number> = {
    inicial: 45,
    primaria: 55,
    secundaria: 70,
    tecnica: 85
  };

  const multiplicadorGestion: Record<string, number> = {
    privada: 1.0,
    subvencionada: 0.95,
    municipal: 0.90
  };

  const montoPorHijo = Math.round(montosBase[nivelEducativo] * multiplicadorGestion[tipoGestion]);
  const totalBecaMensual = montoPorHijo * numHijos;
  const totalAnual = totalBecaMensual * 12;

  const subestructuras = [
    {
      id: 0,
      title: '1. Unidad de Planificación y Presupuesto Escolar',
      tag: 'Gestión Financiera & Cheque Escolar',
      color: 'border-l-4 border-[#00DED1]',
      icon: Calculator,
      description: 'Responsable de la viabilidad económica, el financiamiento a la demanda y la auditoría en tiempo real de cada fondo invertido por alumno.',
      responsabilidades: [
        'Administración y dispersión del Cheque Escolar (Voucher Educativo) mensual directo a las familias.',
        'Registro digital y censo escolar de las 7 parroquias de Guaicaipuro con verificación biométrica/digital.',
        'Auditoría y control de costos por estudiante para asegurar que el 100% de los recursos lleguen al aula.',
        'Planificación plurianual del fondo municipal para la excelencia docente e infraestructura escolar.'
      ],
      kpi: 'Eficiencia presupuestaria > 96% en asignación directa sin intermediación burocrática.'
    },
    {
      id: 1,
      title: '2. Unidad de Control, Supervisión y Acreditación',
      tag: 'Garantía de Estándares & Autonomía',
      color: 'border-l-4 border-[#1DA5D2]',
      icon: CheckCircle2,
      description: 'Supervisa el cumplimiento de metas de aprendizaje, acredita planteles de libre gestión y asegura instalaciones dignas y seguras.',
      responsabilidades: [
        'Acreditación independiente de colegios públicos, autónomos, comunitarios y privados habilitados.',
        'Inspecciones técnico-sanitarias y estructurales periódicas en coordinación con Protección Civil y Salud.',
        'Veeduría ciudadana con consejos de padres y representantes con potestad consultiva y evaluadora.',
        'Defensa de la libertad de cátedra y neutralidad política de los planteles educativos municipales.'
      ],
      kpi: '100% de escuelas certificadas bajo normas de seguridad y salubridad en los primeros 18 meses.'
    },
    {
      id: 2,
      title: '3. Unidad de Calidad Educativa y Formación Docente',
      tag: 'Excelencia Pedagógica & Capital Humano',
      color: 'border-l-4 border-[#3555FF]',
      icon: Award,
      description: 'Impulsa el mérito, la actualización tecnológica continua del magisterio y la medición estandarizada del aprendizaje.',
      responsabilidades: [
        'Programa de Formación y Certificación Continua en STEM, inglés, programación y habilidades blandas.',
        'Sistema Municipal de Evaluación Estandarizada Anual (pruebas censales en comprensión lectora y lógica-matemática).',
        'Incentivos por mérito y desempeño pedagógico para educadores destacados de Guaicaipuro.',
        'Convenios con universidades nacionales e internacionales (UCAB, USB, UCV) para pasantías y posgrados.'
      ],
      kpi: 'Mejora sostenida de un 25% interanual en rendimiento matemático y comprensión lectora.'
    }
  ];

  const dimensionesCalidad = [
    {
      titulo: 'Dimensión 1: Rendimiento Académico & Competencias',
      indicadores: [
        'Porcentaje de alumnos con nivel óptimo en lectura comprensiva a los 8 años (Meta: > 85%).',
        'Puntaje promedio en pruebas municipales de razonamiento matemático y resolución de problemas.',
        'Tasa de retención escolar y graduación efectiva en educación secundaria (Meta: > 92%).',
        'Manejo de herramientas digitales y bilingüismo en egresados de bachillerato.'
      ]
    },
    {
      titulo: 'Dimensión 2: Autonomía Institucional & Gestión',
      indicadores: [
        'Índice de satisfacción de las familias con el plantel elegido mediante el voucher escolar.',
        'Autonomía de directores en la contratación y gestión de planes de mejora escolar.',
        'Tiempo promedio de respuesta en mantenimiento y reposición de dotación educativa (< 72 hrs).',
        'Rendición de cuentas pública y transparente publicada trimestralmente en portal abierto.'
      ]
    },
    {
      titulo: 'Dimensión 3: Bienestar Docente & Clima Escolar',
      indicadores: [
        'Salarios competitivos y bonos de mérito vinculados a la capacitación continua.',
        'Índice de convivencia escolar, prevención de acoso y atención psicológica integral.',
        'Acceso de 100% de estudiantes a comedores escolares balanceados y servicios de salud preventiva.',
        'Proporción de docentes con certificaciones pedagógicas actualizadas en los últimos 2 años.'
      ]
    }
  ];

  const fasesPMI = [
    {
      fase: 'Fase I: Iniciación & Marco Jurídico (Meses 1-3)',
      descripcion: 'Redacción y aprobación de la Ordenanza Municipal del Sistema Educativo Libre de Guaicaipuro. Censo inicial de planteles y alumnos.',
      entregables: ['Ordenanza del Cheque Escolar sancionada', 'Registro Único de Familias y Centros Educativos', 'Diagnóstico de infraestructura escolar']
    },
    {
      fase: 'Fase II: Planificación & Plataforma Digital (Meses 4-6)',
      descripcion: 'Diseño de la plataforma segura para la gestión de solicitudes, asignación del voucher y billetera familiar.',
      entregables: ['Software municipal de gestión de vouchers', 'Protocolo de acreditación de colegios', 'Mecanismo de pago transparente']
    },
    {
      fase: 'Fase III: Ejecución Piloto Parroquial (Meses 7-12)',
      descripcion: 'Lanzamiento controlado en dos parroquias piloto (Los Teques y San Pedro) con 3,500 familias beneficiarias.',
      entregables: ['Primer desembolso de subsidio a la demanda', 'Primera ronda de evaluación pedagógica muestral', 'Comité de seguimiento instalado']
    },
    {
      fase: 'Fase IV: Monitoreo, Control & Ajustes (Meses 13-18)',
      descripcion: 'Auditoría de impacto académico, encuestas a padres de familia y calibración del modelo financiero municipal.',
      entregables: ['Informe de impacto y aprendizaje', 'Ajustes en reglamentos y montos por nivel', 'Segunda acreditación de instituciones']
    },
    {
      fase: 'Fase V: Expansión & Despliegue Pleno (Meses 19-36)',
      descripcion: 'Extensión a las 7 parroquias de Guaicaipuro (Cecilio Acosta, El Jarillo, San Pedro, Tácata, Altagracia de la Montaña, Paracotos, Los Teques).',
      entregables: ['Cobertura universal para familias que lo soliciten', 'Feria anual de innovación pedagógica', 'Consolidación de Guaicaipuro como Faro Educativo']
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-md p-6 sm:p-10 my-8">
      {/* Header del Bloque */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAEAEA] pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DED1]/10 text-[#00877f] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Eje Estratégico Municipal • Plan Guaicaipuro Tierra de Gracia
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
            Dirección de Educación y Capital Intelectual (Fomento)
          </h2>
          <p className="text-[#676767] mt-1 text-sm sm:text-base">
            Estructura operativa integrada al Plan de Gobierno: descentralización, financiamiento a la demanda y evaluación por mérito.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-semibold">
            Despacho N° 5 de 12
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-[#00DED1] text-white text-xs font-bold">
            Modelo Liberal
          </span>
        </div>
      </div>

      {/* Tabs de Navegación del Componente */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-100 pb-3">
        <button
          onClick={() => setActiveTab('subestructuras')}
          className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'subestructuras'
              ? 'bg-[#00DED1] text-white shadow-sm'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          3 Sub-Estructuras
        </button>

        <button
          onClick={() => setActiveTab('calidad')}
          className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'calidad'
              ? 'bg-[#00DED1] text-white shadow-sm'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Dimensiones de Calidad
        </button>

        <button
          onClick={() => setActiveTab('pmi')}
          className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'pmi'
              ? 'bg-[#00DED1] text-white shadow-sm'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Compass className="w-4 h-4" />
          Ruta PMI (5 Fases)
        </button>

        <button
          onClick={() => setActiveTab('simulador')}
          className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
            activeTab === 'simulador'
              ? 'bg-[#1DA5D2] text-white shadow-sm'
              : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
          }`}
        >
          <Calculator className="w-4 h-4" />
          Simulador Voucher Escolar
        </button>
      </div>

      {/* Pestaña 1: Subestructuras */}
      {activeTab === 'subestructuras' && (
        <div className="space-y-6">
          <div className="bg-[#F8F8F8] p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#00DED1]" />
              Esquema Orgánico Funcional de la Dirección
            </h3>
            <p className="text-sm text-gray-600">
              La Dirección de Educación abandona el control doctrinario centralizado para convertirse en un organismo técnico y facilitador, articulado en tres unidades clave:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {subestructuras.map((item, index) => {
              const Icon = item.icon;
              const isSelected = selectedUnit === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedUnit(index)}
                  className={`cursor-pointer rounded-xl p-5 transition-all bg-white border ${
                    isSelected 
                      ? 'border-[#00DED1] ring-2 ring-[#00DED1]/20 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-lg bg-[#00DED1]/10 flex items-center justify-center text-[#00877f]">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Unidad {index + 1}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-1.5">{item.title}</h4>
                  <span className="inline-block text-xs font-semibold text-[#1DA5D2] bg-sky-50 px-2.5 py-1 rounded-md mb-3">
                    {item.tag}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="text-[11px] font-semibold text-[#00877f] flex items-center gap-1">
                    Ver funciones y metas <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {selectedUnit !== null && (
            <div className="bg-sky-50/50 border border-sky-100 rounded-xl p-6 mt-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00DED1]" />
                Detalle Operativo: {subestructuras[selectedUnit].title}
              </h4>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Responsabilidades directas de esta unidad:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {subestructuras[selectedUnit].responsabilidades.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-3 rounded-lg border border-gray-200/70">
                    <span className="w-2 h-2 rounded-full bg-[#00DED1] mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-3.5 rounded-lg border border-sky-200 text-xs text-sky-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-600 shrink-0" />
                <span><strong>Meta de Impacto (KPI):</strong> {subestructuras[selectedUnit].kpi}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Pestaña 2: Calidad Educativa */}
      {activeTab === 'calidad' && (
        <div className="space-y-6">
          <div className="bg-[#F8F8F8] p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#00DED1]" />
              Marco Integral de Calidad Educativa Municipal
            </h3>
            <p className="text-sm text-gray-600">
              Evaluamos resultados reales y bienestar integral mediante tres dimensiones objetivas basadas en evidencia:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dimensionesCalidad.map((dim, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm mb-3 pb-2 border-b border-gray-100 text-[#222222]">
                  {dim.titulo}
                </h4>
                <ul className="space-y-2.5">
                  {dim.indicadores.map((ind, j) => (
                    <li key={j} className="text-xs text-gray-600 flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1DA5D2] mt-1.5 shrink-0" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-emerald-950 text-xs sm:text-sm">
            <h5 className="font-bold mb-1 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Principio Fundamental: Financiamiento a la Demanda
            </h5>
            <p className="leading-relaxed">
              El presupuesto municipal de educación se transfiere directamente a la familia a través de la cuenta escolar o voucher, permitiendo que cada padre escoja la institución educativa que mejor responda a las necesidades de sus hijos, generando sana competencia y constante mejora cualitativa.
            </p>
          </div>
        </div>
      )}

      {/* Pestaña 3: Ruta PMI */}
      {activeTab === 'pmi' && (
        <div className="space-y-6">
          <div className="bg-[#F8F8F8] p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#00DED1]" />
              Hoja de Ruta PMI: De la Planificación a la Excelencia
            </h3>
            <p className="text-sm text-gray-600">
              Implementación metódica y auditada bajo estándares del Project Management Institute (PMI) en un horizonte de 36 meses:
            </p>
          </div>

          <div className="space-y-4">
            {fasesPMI.map((fase, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#00DED1] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00DED1]/20 text-[#00877f] font-bold text-xs flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    {fase.fase}
                  </h4>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full w-fit">
                    Hito {i + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 pl-8">
                  {fase.descripcion}
                </p>
                <div className="pl-8 flex flex-wrap gap-2">
                  {fase.entregables.map((entregable, j) => (
                    <span key={j} className="text-[11px] font-medium bg-sky-50 text-sky-800 px-2.5 py-1 rounded-md border border-sky-100">
                      ✓ {entregable}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pestaña 4: Simulador Cheque Escolar */}
      {activeTab === 'simulador' && (
        <div className="space-y-6">
          <div className="bg-[#F8F8F8] p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#00DED1]" />
              Simulador Interactivo del Cheque Escolar (Voucher)
            </h3>
            <p className="text-sm text-gray-600">
              Calcula el subsidio directo mensual y anual que recibirá una familia del municipio Guaicaipuro según el número de hijos y grado escolar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl border border-gray-200">
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Número de Hijos en Edad Escolar: <span className="text-[#00DED1] text-base font-extrabold">{numHijos}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={numHijos}
                  onChange={(e) => setNumHijos(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#00DED1]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>1 hijo</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6 hijos</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Nivel Educativo Principal
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'inicial', label: 'Inicial / Maternal ($45)' },
                    { id: 'primaria', label: 'Primaria ($55)' },
                    { id: 'secundaria', label: 'Secundaria ($70)' },
                    { id: 'tecnica', label: 'Técnica / Oficios ($85)' }
                  ].map((nivel) => (
                    <button
                      key={nivel.id}
                      onClick={() => setNivelEducativo(nivel.id as any)}
                      className={`text-xs py-2 px-3 rounded-lg font-medium border text-left transition-all ${
                        nivelEducativo === nivel.id
                          ? 'border-[#00DED1] bg-[#00DED1]/10 text-gray-900 font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {nivel.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Tipo de Institución Elegida
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'municipal', label: 'Colegio Municipal' },
                    { id: 'subvencionada', label: 'Subvencionado' },
                    { id: 'privada', label: 'Privado Autónomo' }
                  ].map((tipo) => (
                    <button
                      key={tipo.id}
                      onClick={() => setTipoGestion(tipo.id as any)}
                      className={`text-xs py-2 px-2.5 rounded-lg font-medium border text-center transition-all ${
                        tipoGestion === tipo.id
                          ? 'border-[#1DA5D2] bg-[#1DA5D2]/10 text-gray-900 font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {tipo.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Resultado del Simulador */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#00DED1] mb-2 block">
                  Asignación Directa Estimada
                </span>
                <h4 className="text-xl font-bold mb-4">Cheque Escolar Familiar</h4>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-3">
                    <span className="text-xs text-gray-400 block">Subsidio por Estudiante / Mes:</span>
                    <span className="text-2xl font-bold text-white">${montoPorHijo} USD</span>
                  </div>

                  <div className="border-b border-gray-700 pb-3">
                    <span className="text-xs text-gray-400 block">Monto Total Familiar / Mes ({numHijos} hijos):</span>
                    <span className="text-3xl font-extrabold text-[#00DED1]">${totalBecaMensual} USD</span>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 block">Inversión Municipal Anual en la Familia:</span>
                    <span className="text-lg font-semibold text-sky-200">${totalAnual} USD / año</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700 text-[11px] text-gray-400">
                💡 Los fondos se acreditan de manera intransferible en la billetera escolar para el pago directo de matrícula, uniformes, libros y tecnologías aprobadas.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
