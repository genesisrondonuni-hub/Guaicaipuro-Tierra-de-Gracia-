import { useState } from 'react';
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Layers,
  LineChart,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  BarChart3,
  BookOpen,
  Eye,
  X
} from 'lucide-react';

export default function EducationStructureProposal() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const qualityDimensions = [
    {
      dimension: 'Gestión Institucional',
      indicators: 'Eficiencia administrativa, liderazgo directivo y clima escolar.',
      badge: 'Dimensión 01',
    },
    {
      dimension: 'Práctica Pedagógica',
      indicators: 'Desempeño Docente, uso de la tecnología y actualización curricular.',
      badge: 'Dimensión 02',
    },
    {
      dimension: 'Resultados del Aprendizaje',
      indicators: 'Índices de aprobación, deserción escolar y rendimiento en pruebas estandarizadas.',
      badge: 'Dimensión 03',
    },
  ];

  const implementationSteps = [
    {
      step: 'Paso 1',
      title: 'Diagnóstico Inicial',
      desc: 'Levantar un censo del estado actual de las escuelas del municipio (infraestructura, conectividad y matrícula).',
    },
    {
      step: 'Paso 2',
      title: 'Diseño del Plan Piloto',
      desc: 'Probar los instrumentos de evaluación en un grupo reducido de escuelas (2 o 3) para corregir errores de medición.',
    },
    {
      step: 'Paso 3',
      title: 'Evaluación General',
      desc: 'Aplicar las auditorías pedagógicas y de gestión en toda la red escolar municipal.',
    },
    {
      step: 'Paso 4',
      title: 'Planes de Mejora Institucional (PMI)',
      desc: 'Tras la evaluación, la oficina co-diseña con cada escuela un plan de acción obligatorio con metas a corto y mediano plazo para solucionar sus debilidades.',
    },
    {
      step: 'Paso 5',
      title: 'Transparencia y Rendición de Cuentas',
      desc: 'Tableros de control (Dashboards) en tiempo real para la Alcaldía y supervisores + publicación del Informe Anual de Calidad para la comunidad.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Encabezado de la Propuesta Oficial */}
      <div className="vente-card p-6 sm:p-10" style={{ borderTop: '4px solid var(--color-primary)' }}>
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--color-secondary)' }}>
              <GraduationCap className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              PROPUESTA ESTRUCTURAL INTEGRADA • ALCALDÍA DE GUAICAIPURO
            </div>
            <h2 className="m-0 text-2xl sm:text-3xl">
              Dirección de Educación • Sub-Estructuras y Calidad Educativa
            </h2>
          </div>
          <span
            className="px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm"
            style={{ backgroundColor: '#0EA5E9', color: '#FFFFFF' }}
          >
            FOMENTO
          </span>
        </div>

        <p className="text-base sm:text-lg font-medium mb-8" style={{ color: 'var(--color-heading)' }}>
          Responsable de diseñar las políticas públicas educativas del municipio alineadas con el gobierno nacional y el Plan de Gobierno Municipal <b>«Guaicaipuro Tierra de Gracia»</b>.
        </p>

        {/* ORGANIGRAMA VISUAL DE LA DIRECCIÓN DE EDUCACIÓN */}
        <div
          className="rounded-xl p-6 sm:p-8 mb-10 border"
          style={{ backgroundColor: '#F8FAFC', borderColor: 'var(--color-border)' }}
        >
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-secondary)' }}>
              DIAGRAMA JERÁRQUICO OFICIAL • DESPACHO 07
            </span>
            <h3 className="text-lg font-bold mt-1">Organigrama Interno de la Dirección de Educación</h3>
          </div>

          {/* Nodo Superior: Dirección de Educación */}
          <div className="flex flex-col items-center">
            <div
              className="px-8 py-3.5 rounded-lg font-extrabold text-sm sm:text-base uppercase tracking-wider text-center shadow-sm border-2"
              style={{
                backgroundColor: '#DCEEFB',
                borderColor: '#64748B',
                color: '#0F172A',
                minWidth: '280px',
              }}
            >
              DIRECCIÓN DE EDUCACIÓN.
            </div>
            {/* Línea vertical central */}
            <div className="w-0.5 h-6 bg-slate-500" />
            {/* Barra horizontal conectora de las 3 Unidades */}
            <div className="hidden lg:block w-4/5 h-0.5 bg-slate-500" />
          </div>

          {/* 3 Columnas: Las 3 Unidades */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2 lg:mt-0">
            {/* Columna 1: Unidad de Planificación y Presupuesto */}
            <div className="flex flex-col items-center">
              <div className="hidden lg:block w-0.5 h-5 bg-slate-500" />
              <div
                className="w-full p-3.5 rounded-lg text-center font-bold text-xs uppercase tracking-wide border-2 shadow-sm"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#64748B', color: '#0F172A' }}
              >
                UNIDAD DE PLANIFICACIÓN Y PRESUPUESTO
              </div>
              <div className="w-0.5 h-4 bg-slate-400" />

              {/* Oficinas dependientes */}
              <div className="w-full space-y-2.5">
                <div
                  className="p-3 rounded border text-center text-xs font-semibold relative"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  <div>Oficina de Coordinación Pedagógica y/o Académica</div>
                  <div className="text-[10px] font-bold mt-1" style={{ color: 'var(--color-secondary)' }}>
                    ↔ Enlace directo con Control y Supervisión
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-2.5 bg-slate-400" />
                </div>
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Programas Sociales
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-2.5 bg-slate-400" />
                </div>
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Infraestructura y Servicios
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-2.5 bg-slate-400" />
                </div>
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Capital Humano
                </div>
              </div>
            </div>

            {/* Columna 2: Unidad de Control y Supervisión */}
            <div className="flex flex-col items-center">
              <div className="hidden lg:block w-0.5 h-5 bg-slate-500" />
              <div
                className="w-full p-3.5 rounded-lg text-center font-bold text-xs uppercase tracking-wide border-2 shadow-sm"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#64748B', color: '#0F172A' }}
              >
                UNIDAD DE CONTROL Y SUPERVISIÓN
              </div>
              <div className="w-0.5 h-4 bg-slate-400" />
              <div
                className="w-full p-4 rounded-lg border text-xs leading-relaxed space-y-2"
                style={{ backgroundColor: '#FFFFFF', borderColor: 'var(--color-primary)' }}
              >
                <div className="font-bold text-center" style={{ color: 'var(--color-heading)' }}>
                  Supervisión Legal y Pedagógica Transversal
                </div>
                <p className="text-xs m-0 text-center">
                  Articulada directamente con la <b>Oficina de Coordinación Pedagógica y/o Académica</b> y con el <b>Síndico Procurador Municipal</b> para examinar normativas, contratos, convenios, calendarios escolares y convivencia.
                </p>
              </div>
            </div>

            {/* Columna 3: Unidad de Calidad Educativa */}
            <div className="flex flex-col items-center">
              <div className="hidden lg:block w-0.5 h-5 bg-slate-500" />
              <div
                className="w-full p-3.5 rounded-lg text-center font-bold text-xs uppercase tracking-wide border-2 shadow-sm"
                style={{ backgroundColor: '#FFFFFF', borderColor: 'var(--color-primary)', color: '#0F172A' }}
              >
                UNIDAD DE CALIDAD EDUCATIVA
              </div>
              <div className="w-0.5 h-4 bg-slate-400" />

              <div className="w-full space-y-2.5">
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Evaluación y Estadística
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-2.5 bg-slate-400" />
                </div>
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Acompañamiento e Innovación
                </div>
                <div className="flex justify-center">
                  <div className="w-0.5 h-2.5 bg-slate-400" />
                </div>
                <div
                  className="p-3 rounded border text-center text-xs font-semibold"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#94A3B8', color: '#1E293B' }}
                >
                  Oficina de Formación Continua
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DETALLE DE LAS SUB-ESTRUCTURAS */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold pb-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
            Detalle de Sub-estructuras y Oficinas Adscritas
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Sub-estructura 1: Planificación y Presupuesto */}
            <div className="vente-card flex flex-col justify-between" style={{ borderTop: '4px solid var(--color-secondary)' }}>
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-secondary)' }}>
                    SUB-ESTRUCTURA 01
                  </span>
                  <h4 className="text-lg font-bold mt-1">Unidad de Planificación y Presupuesto</h4>
                  <p className="text-xs mt-1 m-0">
                    Coordina la asignación de recursos, formula proyectos educativos anuales y evalúa el cumplimiento de metas institucionales con sentido de pertenencia e identidad local y nacional.
                  </p>
                </div>

                <div className="space-y-3 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Coordinación Pedagógica y/o Académica:</b> Supervisa los planes de estudio, la formación continua de los docentes y rendimiento escolar de los alumnos en los planteles municipales.
                  </div>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Programas Sociales:</b> Formula y administra programas de apoyo, como dotación de uniformes, cheque escolar y atención psicopedagógica.
                  </div>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Infraestructura y Servicios:</b> Planifica conjuntamente con la Unidad de Proyectos y Obras Públicas, de la Dirección de Infraestructura y Urbanismo; las reparaciones, mantenimiento de plantas físicas y la logística de insumos básicos en las escuelas.
                  </div>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Capital Humano:</b> Gestiona la Nómina de Personal docente, administrativo y obrero, así como los procesos de contratación y jubilación.
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-estructura 2: Control y Supervisión */}
            <div className="vente-card flex flex-col justify-between" style={{ borderTop: '4px solid #222222' }}>
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-heading)' }}>
                    SUB-ESTRUCTURA 02
                  </span>
                  <h4 className="text-lg font-bold mt-1">Unidad de Control y Supervisión</h4>
                  <p className="text-xs mt-1 m-0">
                    Examina, gestiona y aplica normativas legales escolares, contratos y convenios de la Dirección conjuntamente con el Síndico Procurador.
                  </p>
                </div>

                <div className="space-y-3 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="p-3 rounded-lg text-xs" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
                    <b style={{ color: 'var(--color-heading)' }}>Supervisión en Campo:</b> Instrumenta a los inspectores o supervisores que visitan los colegios para verificar que se cumplan:
                    <ul className="mt-2 space-y-1.5 pl-4 list-disc">
                      <li>Normativas de convivencia escolar</li>
                      <li>Cumplimiento estricto de los calendarios escolares</li>
                      <li>Directrices pedagógicas y administrativas de la Dirección</li>
                      <li>Validez legal de convenios y contratos junto a Sindicatura</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-estructura 3: Unidad de Calidad Educativa */}
            <div className="vente-card flex flex-col justify-between" style={{ borderTop: '4px solid var(--color-primary)' }}>
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>
                    SUB-ESTRUCTURA 03 • INNOVACIÓN ESTRATÉGICA
                  </span>
                  <h4 className="text-lg font-bold mt-1">Unidad de Calidad Educativa</h4>
                  <p className="text-xs mt-1 m-0">
                    De enfoque estratégico que combina la normativa legal con herramientas prácticas de evaluación. <b>El objetivo principal no es punitivo, sino de acompañamiento y mejora continua</b> para centros educativos municipales.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Evaluación y Estadística:</b> Encargada del diseño de instrumentos (encuestas, rúbricas) y del procesamiento de datos de los planteles.
                  </div>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Acompañamiento e Innovación:</b> Formada por asesores pedagógicos que visitan las escuelas para ayudar a los directores a corregir fallas.
                  </div>
                  <div className="text-xs">
                    <b style={{ color: 'var(--color-heading)' }}>• Oficina de Formación Continua:</b> Diseña talleres y planes de capacitación docente basados en las debilidades detectadas en las evaluaciones.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blindaje Jurídico e Institucional de Calidad Educativa */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: '#222222', color: '#FFFFFF' }}>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--color-primary)' }}>
              <Scale className="w-4 h-4" />
              IMPORTANTE • BLINDAJE JURÍDICO PREVIO DE LA UNIDAD DE CALIDAD EDUCATIVA
            </div>
            <p className="text-xs mb-4" style={{ color: '#CCCCCC' }}>
              Antes de iniciar operaciones, es indispensable blindar la Unidad de Calidad Educativa jurídicamente mediante tres requisitos fundamentales:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderLeft: '3px solid var(--color-primary)' }}>
                <div className="font-bold text-sm text-white mb-1">1. Decreto de Creación</div>
                <p className="text-xs m-0" style={{ color: '#CCCCCC' }}>
                  Tramitar la ordenanza municipal o decreto alcaldicio que formalice la existencia de la oficina y delimite sus competencias.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderLeft: '3px solid var(--color-secondary)' }}>
                <div className="font-bold text-sm text-white mb-1">2. Alineación Ministerial</div>
                <p className="text-xs m-0" style={{ color: '#CCCCCC' }}>
                  Asegurar que los estándares de calidad que la oficina medirá estén alineados con el Ministerio o Secretaría de Educación nacional.
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderLeft: '3px solid var(--color-primary)' }}>
                <div className="font-bold text-sm text-white mb-1">3. Presupuesto Asignado</div>
                <p className="text-xs m-0" style={{ color: '#CCCCCC' }}>
                  Garantizar recursos para la contratación de personal calificado (evaluadores, estadísticos) y herramientas tecnológicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generalidades de la Creación: Modelo de Calidad y Ruta Paso a Paso */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Definición del Modelo de Calidad (3 Dimensiones) */}
        <div className="lg:col-span-5 vente-card space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-secondary)' }}>
              <BarChart3 className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              GENERALIDADES DE LA CREACIÓN
            </div>
            <h3 className="text-xl font-bold m-0">Definición del Modelo de Calidad</h3>
            <p className="text-xs mt-2 m-0">
              La oficina basa sus evaluaciones en indicadores claros y medibles, divididos en tres grandes dimensiones:
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr style={{ backgroundColor: '#222222', color: '#FFFFFF' }}>
                  <th className="p-3.5 font-bold uppercase tracking-wider w-2/5">Dimensión</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider">Indicadores Medibles</th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
                {qualityDimensions.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="p-3.5 font-bold" style={{ color: 'var(--color-heading)' }}>
                      <span className="block text-[10px] uppercase font-extrabold mb-0.5" style={{ color: 'var(--color-secondary)' }}>
                        {row.badge}
                      </span>
                      {row.dimension}
                    </td>
                    <td className="p-3.5 leading-relaxed" style={{ color: 'var(--color-text)' }}>
                      {row.indicators}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Documentos Originales Adjuntos */}
          <div className="pt-4 space-y-3" style={{ borderTop: '1px solid var(--color-border)' }}>
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-heading)' }}>
              Láminas Oficiales de la Propuesta (Vista Previa):
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPreviewImage('/assets/aistudio/Estructura_EDUCACI_N_Alcaldia_de_Guaicaipuro__1__535d6a43.jpg')}
                className="p-2.5 rounded-lg border text-left hover:border-[#00DED1] transition-all cursor-pointer flex items-center gap-2.5 bg-white"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Eye className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate" style={{ color: 'var(--color-heading)' }}>Lámina 1: Sub-estructuras</div>
                  <div className="text-[10px]" style={{ color: 'var(--color-text)' }}>Click para ampliar</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setPreviewImage('/assets/aistudio/Estructura_EDUCACION_Alcaldia_de_Guaicaipuro_2__1__d89400b6.jpg')}
                className="p-2.5 rounded-lg border text-left hover:border-[#00DED1] transition-all cursor-pointer flex items-center gap-2.5 bg-white"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <Eye className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate" style={{ color: 'var(--color-heading)' }}>Lámina 2: Ruta y Organigrama</div>
                  <div className="text-[10px]" style={{ color: 'var(--color-text)' }}>Click para ampliar</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Ruta de Implementación (Paso a Paso) */}
        <div className="lg:col-span-7 vente-card space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-secondary)' }}>
              <ClipboardCheck className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
              HOJA DE RUTA OPERATIVA
            </div>
            <h3 className="text-xl font-bold m-0">Ruta de Implementación (Paso a Paso)</h3>
            <div className="mt-3 p-3 rounded-lg text-xs font-bold flex flex-wrap items-center gap-2" style={{ backgroundColor: 'var(--color-bg-soft)', color: 'var(--color-heading)' }}>
              <span>[Paso 1: Diagnóstico Inicial]</span>
              <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
              <span>[Paso 2: Plan Piloto]</span>
              <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
              <span>[Paso 3: Evaluación General]</span>
              <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
              <span>[Paso 4: Planes de Mejora]</span>
            </div>
          </div>

          <div className="space-y-3">
            {implementationSteps.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg flex items-start gap-3.5"
                style={{
                  backgroundColor: 'var(--color-bg-soft)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                }}
              >
                <div
                  className="px-2.5 py-1 rounded text-xs font-extrabold flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: '#222222', color: 'var(--color-primary)' }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm m-0" style={{ color: 'var(--color-heading)' }}>
                    {item.title}
                  </h4>
                  <p className="text-xs mt-1 m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para ampliar las láminas originales */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-heading)' }}>
                Documento Oficial • Propuesta Dirección de Educación (Alcaldía de Guaicaipuro)
              </span>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <img
              src={previewImage}
              alt="Propuesta Estructura Dirección de Educación Alcaldía de Guaicaipuro"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
