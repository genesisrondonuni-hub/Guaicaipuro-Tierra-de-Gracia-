import { Principle, Axis, Parish, Directorate, EducationPillar } from './types';
import { OFFICES_DATA } from './data/officesData';

export const PRINCIPLES: Principle[] = [
  {
    id: 1,
    title: "Estado Subsidiario y Eficiente",
    description: "Reducción del tamaño del Estado a sus funciones esenciales, promoviendo la participación privada y ciudadana en preescolar, bibliotecas y servicios públicos.",
    icon: "Building2"
  },
  {
    id: 2,
    title: "Libertad Individual y Economía de Mercado",
    description: "Fomento de un entorno que impulse la iniciativa privada, la creación de riqueza y la libre elección escolar de las familias guaicaipureñas.",
    icon: "TrendingUp"
  },
  {
    id: 3,
    title: "Meritocracia y Transparencia",
    description: "Sistemas de selección basados en méritos y capacidad, con procesos abiertos y eliminación de prebendas y clientelismo partidista.",
    icon: "ShieldCheck"
  },
  {
    id: 4,
    title: "Descentralización y Autonomía Parroquial",
    description: "Fortalecimiento de las capacidades de gestión a nivel de las 7 parroquias, respetando la subsidiariedad y la democracia directa.",
    icon: "Map"
  },
  {
    id: 5,
    title: "Servicio al Ciudadano",
    description: "Orientación hacia la provisión de servicios públicos y educativos de calidad con estricta medición de resultados e impacto.",
    icon: "Users"
  },
  {
    id: 6,
    title: "Seguridad Jurídica y Respeto a la Propiedad",
    description: "Garantía total de inversión, estabilidad contractual para APPs y respeto absoluto a la propiedad privada y a la libertad de enseñanza.",
    icon: "Scale"
  }
];

export const EDUCATION_PILLARS: EducationPillar[] = [
  {
    id: "vouchers",
    title: "Sistema de Vouchers y Cheque Escolar",
    shortDesc: "Subsidio directo a la demanda: el dinero sigue al estudiante, no a la burocracia.",
    fullDesc: "Las familias de Guaicaipuro reciben un cheque/voucher escolar mensual por cada hijo matriculado, canjeable libremente en escuelas públicas autónomas, subvencionadas o colegios privados acreditados. Financia al estudiante para romper el monopolio estatal y asegurar igualdad de oportunidades.",
    iconName: "Ticket",
    metrics: "100% de cobertura estudiantil planificada en las 7 parroquias"
  },
  {
    id: "desideologizacion",
    title: "Desideologización y Rigor Científico",
    shortDesc: "Eliminación inmediata de adoctrinamiento político y rescate de la verdad histórica.",
    fullDesc: "Cese del adoctrinamiento político en textos escolares y aulas. Sustitución por currículos de excelencia con énfasis en razonamiento matemático, comprensión lectora crítica, método científico e historia venezolana objetiva.",
    iconName: "BookOpenCheck",
    metrics: "0% sesgo político partidista | 100% rigor pedagógico"
  },
  {
    id: "autonomas",
    title: "Escuelas Autónomas y Cogestión Privada",
    shortDesc: "Gestión delegada a fundaciones educativas, universidades y directores calificados.",
    fullDesc: "Los planteles del municipio operan como escuelas autónomas libres de ataduras ministeriales centralizadas. Se firman convenios de cogestión con universidades (UCAB, USB, UCV), fundaciones de trayectoria y cooperativas de docentes evaluados por mérito.",
    iconName: "School",
    metrics: "Autonomía directiva y presupuestaria en cada plantel"
  },
  {
    id: "stem-ingles",
    title: "Trilingüismo, STEM y Robótica",
    shortDesc: "Español, Inglés y Lenguaje Digital (Programación y Robótica) desde preescolar.",
    fullDesc: "Los niños y jóvenes de Guaicaipuro se forman como ciudadanos globales: dominio fluido del español, inglés conversacional y técnico, y lenguaje digital (lógica algorítmica, programación y robótica) para incorporarse a la economía del conocimiento.",
    iconName: "Cpu",
    metrics: "Laboratorios STEM y robótica en las 7 parroquias"
  },
  {
    id: "evaluacion",
    title: "Evaluación Estandarizada y Calidad Curricular",
    shortDesc: "Pruebas anuales de rendimiento con publicación abierta de resultados para las familias.",
    fullDesc: "Restablecimiento de exámenes anuales independientes en lectoescritura, matemáticas y ciencias. Los resultados son públicos por escuela para que los padres tomen decisiones informadas y los colegios compitan en calidad por los vouchers de los estudiantes.",
    iconName: "LineChart",
    metrics: "Auditorías académicas periódicas sin intromisión política"
  },
  {
    id: "concesiones-nutricion",
    title: "Comedores y Mantenimiento Concesionados",
    shortDesc: "0 obreros directos en nómina municipal: servicios contratados con alta calidad e higiene.",
    fullDesc: "El mantenimiento de la infraestructura escolar y el programa de alimentación infantil son operados por empresas y cooperativas privadas especializadas bajo estricta fiscalización del Ingeniero Inspector y del Nutricionista Auditor de la Dirección de Educación.",
    iconName: "Utensils",
    metrics: "Auditoría calórica y sanitaria 100% garantizada"
  }
];

export const ORGANIGRAMA_KPIS = [
  {
    val: "367 (+1)",
    lbl: "Total Empleados (+Alcalde)",
    sub: "Estado Subsidiario Esbelto",
    color: "sky"
  },
  {
    val: "47",
    lbl: "Cargos 99 (Confianza)",
    sub: "12,8% Dirección Política",
    color: "indigo"
  },
  {
    val: "112",
    lbl: "Carrera Administrativa",
    sub: "30,5% Técnicos y Profesionales",
    color: "blue"
  },
  {
    val: "208",
    lbl: "Seguridad y Rescate",
    sub: "56,7% POLIGUAICAIPURO + PC",
    color: "amber"
  },
  {
    val: "Vouchers",
    lbl: "Educación Tierra de Gracia",
    sub: "Subsidio a la Demanda Escolar",
    color: "purple"
  },
  {
    val: "0 Obreros",
    lbl: "Nómina Obrera Directa",
    sub: "100% Tercerizado / Concesión",
    color: "emerald"
  }
];

export const AXES: Axis[] = [
  {
    id: 1,
    title: "Bases Políticas para la Convivencia",
    description: "Restablecimiento de la libertad, la democracia y el funcionamiento efectivo del Estado.",
    details: [
      "Rescate de la independencia de poderes públicos",
      "Reorganización del gobierno municipal hacia funciones esenciales",
      "Legitimación meritocrática de los cargos públicos (LEFP)",
      "Digitalización de procesos municipales (E-Gov y Ventanilla Única)"
    ],
    longDescription: "Este eje se centra en el rescate de los principios republicanos de independencia y contrapeso. Se propone una reorganización profunda para concentrar al municipio en sus funciones esenciales de seguridad, orden jurídico y servicios básicos, eliminando burocracia clientelar y profesionalizando al servidor público mediante concursos abiertos y mérito comprobado.",
    educationImpact: "Establece el marco institucional para despolitizar las escuelas y garantizar que los directores de planteles sean designados por credenciales académicas y no por lealtades ideológicas."
  },
  {
    id: 2,
    title: "Estabilización Expansiva",
    description: "Una economía para la prosperidad, eliminación de la pobreza y crecimiento de la clase media.",
    details: [
      "Respeto absoluto a la propiedad privada y fin de persecuciones",
      "Estabilidad fiscal municipal y simplificación tributaria",
      "Alianzas Público-Privadas (APPs) para infraestructura y servicios",
      "Atracción de inversiones y fomento del libre comercio local"
    ],
    longDescription: "La 'Estabilización Expansiva' busca poner fin a la asfixia económica mediante reglas fiscales claras, eliminación de trabas regulatorias y estabilidad cambiaria. El pilar central es el respeto irrestricto a la propiedad privada, abriendo el camino para que Guaicaipuro sea un polo agroindustrial, comercial y de servicios de los Altos Mirandinos.",
    educationImpact: "El crecimiento económico genera los recursos fiscales transparentes que financian el Fondo Municipal de Vouchers Educativos sin endeudamiento ni inflación."
  },
  {
    id: 3,
    title: "Sociedad de Oportunidades y Capital Intelectual",
    description: "Transformación del capital humano mediante la Dirección de Educación y Capital Intelectual, vouchers escolares a la demanda y salud integral.",
    details: [
      "Dirección de Educación y Capital Intelectual (Despacho 07 del Organigrama)",
      "Sistema de Vouchers Escolares: subsidio a la demanda para que la familia elija",
      "Escuelas Autónomas en cogestión y laboratorios de Robótica / STEM",
      "Sistema de Salud Integral por Aseguramiento y capitalización de pensiones"
    ],
    longDescription: "Proponemos una transformación radical de las oportunidades humanas. La Dirección de Educación y Capital Intelectual, integrada en el Plan de Gobierno Municipal, encarna el principio liberal del subsidio a la demanda: el Estado no impone la escuela, sino que entrega a la familia un voucher educativo para que elija entre colegios públicos autónomos o privados. La educación se vuelve trilingüe (Español, Inglés y Código Digital), complementada con comedores escolares concesionados y salud preventiva de primer nivel.",
    educationImpact: "Eje neurálgico del plan: 14 funcionarios especializados (4 Cargos 99 de confianza y 10 técnicos de carrera) dedicados exclusivamente a la calidad académica, auditoría del voucher, robótica e infraestructura escolar sin burocracia parásita."
  },
  {
    id: 4,
    title: "Economía Verde, Resiliencia y Urbanismo Sostenible",
    description: "Protección ambiental, transición energética y urbanismo ordenado para Guaicaipuro.",
    details: [
      "Preservación de cuencas hídricas en San Pedro, El Jarillo y Tácata",
      "Transición hacia luminarias solares y eficiencia energética municipal",
      "Gestión privada y concesionada de residuos sólidos con reciclaje",
      "Plan de ordenamiento territorial respetuoso de la propiedad rural y urbana"
    ],
    longDescription: "Guaicaipuro cuenta con un patrimonio ecológico excepcional que rodea a los Altos Mirandinos. Este eje promueve la economía circular, la protección de las cuencas de los ríos San Pedro y Tuy, la instalación de paneles solares en edificios públicos y el fomento de negocios agroecológicos y de turismo de bajo impacto ambiental.",
    educationImpact: "Las escuelas del municipio incorporan huertos escolares tecnificados, conciencia ecológica y formación práctica en energías limpias y reciclaje comunitario."
  },
  {
    id: 5,
    title: "Guaicaipuro en el Mundo y Alianzas Estratégicas",
    description: "Vinculación con la diáspora mirandina, cooperación internacional y atracción de capitales.",
    details: [
      "Atracción de capitales de la diáspora guaicaipureña en el exterior",
      "Convenios con fundaciones educativas y universidades internacionales",
      "Promoción turística y comercial de marcas locales (Flores, Café, Duraznos)",
      "Reunificación familiar facilitando trámites y títulos de propiedad"
    ],
    longDescription: "Cientos de miles de profesionales de Guaicaipuro y Miranda emigraron en las últimas décadas. Esta política busca reconectar a nuestros talentos con el municipio mediante fondos de inversión en infraestructura, programas de voluntariado docente internacional remoto y plataformas digitales para el envío seguro de remesas e inversiones en comercios locales.",
    educationImpact: "Profesores y científicos venezolanos en el exterior participarán como mentores en los laboratorios STEM y de idiomas extranjeros de las escuelas de Guaicaipuro."
  },
  {
    id: 6,
    title: "Seguridad Ciudadana y Orden Republicano",
    description: "PoliGuaicaipuro profesionalizada, eliminación de la impunidad y rescate de espacios urbanos.",
    details: [
      "Reestructuración y meritocracia en POLIGUAICAIPURO (208 efectivos policiales)",
      "Policía de proximidad comunitaria y gestión preventiva basada en datos",
      "Modernización tecnológica con cámaras y patrullaje motorizado continuo",
      "Desarticulación total de mafias y recuperación del control del territorio"
    ],
    longDescription: "La seguridad es la primera obligación del Estado subsidiario. Se reorienta a POLIGUAICAIPURO hacia la meritocracia, erradicando el cobro de comisiones y la extorsión. Se protege la tranquilidad de las familias, comerciantes y productores agrícolas en vías rurales y centros urbanos, garantizando que nadie viva con miedo a la delincuencia.",
    educationImpact: "Entornos escolares seguros: corredores vigilados en horarios de entrada y salida escolar para que los niños y jóvenes caminen con tranquilidad."
  }
];

export const PARISHES: Parish[] = [
  {
    id: "los-teques",
    name: "Los Teques",
    type: "Capital - Urbana",
    description: "Centro administrativo y motor económico del municipio. Foco en modernización urbana, digitalización y excelencia educativa.",
    educationInitiatives: [
      "Implementación del portal digital para el canje biométrico del Cheque Escolar Tierra de Gracia.",
      "Convenios de cogestión con universidades locales (IUT, UPEL, UCV) para escuelas autónomas.",
      "Despliegue del Laboratorio Central de Robótica, Programación e Inteligencia Artificial Juvenil.",
      "Reconversión de bibliotecas públicas en centros de aprendizaje digital 24/7."
    ],
    plans: {
      shortTerm: [
        "Digitalización total de trámites municipales y catastro",
        "Plan intensivo de bacheo y alumbrado LED en avenidas principales",
        "Activación de corredores escolares seguros con POLIGUAICAIPURO",
        "Lanzamiento del programa piloto de Vouchers Educativos en 10 planteles"
      ],
      mediumTerm: [
        "Modernización del sistema de transporte público municipal",
        "Red de cámaras de seguridad con IA en cruces viales y escuelas",
        "Creación de la incubadora municipal de startups y negocios digitales",
        "Rehabilitación integral de los mercados municipales vía APP"
      ],
      longTerm: [
        "Implementación completa de infraestructura Smart City",
        "Desarrollo de distrito financiero y comercial en el casco central",
        "Sistema de gestión de residuos de alta tecnología y reciclaje",
        "Parque tecnológico universitario en alianza con empresas privadas"
      ]
    }
  },
  {
    id: "san-pedro",
    name: "San Pedro de los Altos",
    type: "Agrícola - Turística",
    description: "Pueblo de carácter apacible, núcleo vital para la producción de frutas, hortalizas y flores con alto potencial agroturístico.",
    educationInitiatives: [
      "Escuela Técnica de Artes y Oficios Agroecológicos para jóvenes rurales.",
      "Entrega del Voucher Escolar Rural que incluye subsidio de transporte escolar.",
      "Instalación de laboratorio de ciencias naturales y botánica aplicada en la escuela parroquial.",
      "Capacitación bilingüe (Español-Inglés) para guías turísticos locales de la Batalla de San Pedro."
    ],
    plans: {
      shortTerm: [
        "Manejo de desechos orgánicos (Composteras comunitarias para abono)",
        "Ferias de productores semanales directas del campo al consumidor",
        "Rehabilitación de vías rurales críticas que conectan los sembradíos",
        "Optimización del alumbrado público LED en la Plaza Bolívar y casco histórico"
      ],
      mediumTerm: [
        "Inventario exhaustivo de atractivos turísticos y patrimoniales",
        "Puesta en marcha de la Escuela Parroquial de Artes y Oficios",
        "Certificación de saberes para rápida inserción laboral de bachilleres",
        "Rehabilitación del dispensario de salud y ambulancia parroquial permanente"
      ],
      longTerm: [
        "Eje Turístico-Agroecológico permanente con rutas del café y flores",
        "Rutas agroturísticas en haciendas productoras con senderismo",
        "Centro de esparcimiento y saberes para el adulto mayor",
        "Sala de monitoreo tecnológico para jóvenes con docentes tutores"
      ]
    }
  },
  {
    id: "el-jarillo",
    name: "El Jarillo",
    type: "Turística - Agrícola",
    description: "Referente turístico de herencia alemana, parapente y alta productividad de duraznos, fresas y hortalizas de altura.",
    educationInitiatives: [
      "Escuela Técnica de Fruticultura, Cadena de Frío y Procesamiento de Alimentos.",
      "Enseñanza trilingüe: Español, Alemán e Inglés orientada a la hostelería y turismo.",
      "Vouchers escolares para colegios autónomos de montaña.",
      "Aulas digitales conectadas a internet satelital de alta velocidad."
    ],
    plans: {
      shortTerm: [
        "Promoción de la 'Marca Jarillo' para atracción de turismo nacional e internacional",
        "Mantenimiento preventivo intensivo de la vía principal Los Teques - El Jarillo",
        "Asistencia técnica y agronómica a productores de durazno, fresa y hortalizas",
        "Seguridad turística especializada para visitantes y deportistas de parapente"
      ],
      mediumTerm: [
        "Instalación de centros de acopio con cadena de frío para productos perecederos",
        "Desarrollo de senderos ecoturísticos señalizados y guiados por lugareños",
        "Escuela de gastronomía, repostería tradicional y hotelería de montaña",
        "Sistema de riego comunitario por goteo para optimizar el agua de manantiales"
      ],
      longTerm: [
        "Hub internacional de turismo de aventura, parapente y agroturismo",
        "Planta procesadora comunitaria de mermeladas, vinos y conservas de frutas",
        "Gestión integral y protección de las cuencas hídricas que abastecen a la región",
        "Conectividad digital de fibra y satélite en todas las comunidades agrícolas"
      ]
    }
  },
  {
    id: "paracotos",
    name: "Paracotos",
    type: "Industrial - Residencial",
    description: "Estratégica puerta de entrada sur del municipio conectada a la Autopista Regional del Centro, con potencial manufacturero.",
    educationInitiatives: [
      "Escuela Técnica Politécnica de Mecatrónica, Soldadura y Logística Industrial.",
      "Alianzas de formación dual con industrias radicadas en Paracotos.",
      "Vouchers escolares para capacitación laboral acelerada de jóvenes.",
      "Laboratorio de computación y diseño asistido en el liceo parroquial."
    ],
    plans: {
      shortTerm: [
        "Plan de seguridad blindada para zonas industriales y transporte de carga",
        "Frecuencia garantizada de recolección de desechos sólidos mediante concesión",
        "Iluminación LED completa del distribuidor y accesos desde la Autopista",
        "Censo municipal de capacidades industriales, galpones y talleres activos"
      ],
      mediumTerm: [
        "Creación del Centro de Formación Técnica en alianza con gremios industriales",
        "Desarrollo de parques residenciales ordenados con servicios básicos garantizados",
        "Incentivos tributarios y simplificación de trámites para instalación de nuevas fábricas",
        "Recuperación de canchas deportivas mediante convenios con clubes privados"
      ],
      longTerm: [
        "Expansión del Parque Industrial Tecnológico y Libre de Burocracia",
        "Centro logístico y puerto seco de distribución para la Gran Caracas",
        "Planta de tratamiento de aguas residuales industriales bajo normas ecológicas",
        "Vía alterna de conexión directa con los Valles del Tuy y el centro del país"
      ]
    }
  },
  {
    id: "tacata",
    name: "Tácata",
    type: "Rural - Histórica",
    description: "Conocida como la 'Puerta del Llano', con rica historia de resistencia, ganadería extensiva y balnearios fluviales.",
    educationInitiatives: [
      "Aulas satelitales con paneles solares para caseríos sin red eléctrica continua.",
      "Vouchers escolares con complemento para uniforme, útiles y transporte fluvial/rural.",
      "Formación escolar en zootecnia básica, veterinaria y agricultura regenerativa.",
      "Capacitación en preservación histórica y turismo ecológico del río Tuy."
    ],
    plans: {
      shortTerm: [
        "Protección, dragado y saneamiento preventivo de las riberas del río",
        "Rehabilitación con maquinaria pesada de vías de penetración agrícola",
        "Ambulatorio rural 24 horas con médico residente y medicinas básicas",
        "Apoyo crediticio y asistencia sanitaria a pequeños productores ganaderos"
      ],
      mediumTerm: [
        "Centro de interpretación histórica y cultural de la fundación de Tácata",
        "Cooperativa parroquial de comercialización directa de quesos y carne",
        "Habilitación de balnearios turísticos seguros con servicios concesionados",
        "Rehabilitación estructural de todas las escuelas rurales concentradas"
      ],
      longTerm: [
        "Nodo logístico de intercambio comercial agropecuario con el estado Guárico",
        "Plan de vivienda rural digna y autoconstruida con títulos de propiedad",
        "Electrificación rural sustentable con microrredes solares comunitarias",
        "Centro de inseminación y mejoramiento genético de ganado bovino y caprino"
      ]
    }
  },
  {
    id: "cecilio-acosta",
    name: "Cecilio Acosta",
    type: "Rural - Cultural",
    description: "Cuna de insignes intelectuales, con profunda identidad comunitaria, artesanía y fértiles campos de hortalizas.",
    educationInitiatives: [
      "Centro Cultural y Humanístico 'Cecilio Acosta' para artes, música y literatura.",
      "Vouchers educativos para escuelas rurales y fomento del talento matemático y humanístico.",
      "Programa 'Aprende el Lenguaje Digital' con computadoras portátiles e internet.",
      "Talleres comunitarios de manualidades, tejido y artesanía tradicional con valor comercial."
    ],
    plans: {
      shortTerm: [
        "Rescate de las fiestas patronales tradicionales y encuentros culturales",
        "Dotación de insumos médicos y personal en los ambulatorios de San Diego y Caseríos",
        "Distribución directa de fertilizantes y semillas certificadas a precio de mercado",
        "Patrullaje rural permanente de POLIGUAICAIPURO en caminos vecinales"
      ],
      mediumTerm: [
        "Creación del Mercado Artesanal y de Productores de Cecilio Acosta",
        "Financiamiento para instalación de sistemas de riego tecnificado por goteo",
        "Programa masivo de alfabetización digital para jóvenes y adultos mayores",
        "Pavimentación de caminos que unen los sectores de Agua Fría, San Diego y El Peñón"
      ],
      longTerm: [
        "Ruta cultural, gastronómica y de posadas campesinas de Cecilio Acosta",
        "Centro agroindustrial para el empacado y procesamiento de verduras frescas",
        "Instituto tecnológico de agricultura de precisión y robótica rural",
        "Autonomía administrativa plena de la Junta Parroquial con presupuesto participativo"
      ]
    }
  },
  {
    id: "altagracia",
    name: "Altagracia de la Montaña",
    type: "Rural - Agropecuaria",
    description: "Extensa y hermosa parroquia serrana con clima privilegiado para la ganadería de altura, café y tubérculos.",
    educationInitiatives: [
      "Subsidio escolar incrementado por distancia territorial (Voucher de Alta Montaña).",
      "Escuelas agroforestales con huertos de café bajo sombra y apicultura.",
      "Aulas multigrado digitalizadas con antenas de conexión satelital directa.",
      "Plan vacacional de exploración científica y biodiversidad de montaña."
    ],
    plans: {
      shortTerm: [
        "Electrificación de emergencia y suministro de luminarias solares en caseríos aislados",
        "Plan de choque para reparación de trochas y puentes agrícolas antes de lluvias",
        "Dotación integral del centro de salud parroquial y transporte de emergencias",
        "Censo ganadero y agrícola para expedición de títulos de propiedad de la tierra"
      ],
      mediumTerm: [
        "Introducción de pastos mejorados y técnicas modernas de ordeño higiénico",
        "Rehabilitación total de la infraestructura física de las escuelas rurales",
        "Centro parroquial de acopio y refrigeración de leche cruda para queserías",
        "Talleres de gestión financiera y emprendimiento para familias productoras"
      ],
      longTerm: [
        "Proyectos agroforestales de café especial de exportación y cacao de montaña",
        "Red escolar 100% conectada a internet satelital con tutores pedagógicos",
        "Asfaltado integral de la troncal que conecta con Altagracia y caseríos del sur",
        "Parque eólico experimental de montaña para generación de energía limpia local"
      ]
    }
  }
];

export const DIRECTORATES: Directorate[] = [
  {
    name: "Dirección de Educación y Capital Intelectual (Tierra de Gracia)",
    objective: "Revolución educativa liberal: Vouchers/cheque escolar, libertad de cátedra, escuelas autónomas, STEM e inglés sin adoctrinamiento.",
    actions: [
      "Vouchers y Cheque Escolar para subsidio a la demanda",
      "Desideologización total y rigor científico curricular",
      "Escuelas autónomas cogestionadas con universidades y privados",
      "Laboratorios de robótica, programación e idiomas (STEM)",
      "Comedores y mantenimiento escolar 100% concesionados",
      "Evaluación independiente de rendimiento académico"
    ],
    type: "new",
    headcount: 14,
    cargos99: 4,
    carrera: 10,
    legal: "CRBV Art. 178 num. 6; LOPPM Arts. 88 y 165; LEFP Arts. 20 y 21"
  },
  {
    name: "Despacho del Alcalde y Dirección General",
    objective: "Círculo de confianza, planificación estratégica, gobierno electrónico (CTO), APPs y transparencia.",
    actions: ["Gobierno Electrónico (CTO)", "Unidad de APPs", "Transparencia y Datos Abiertos", "Seguimiento cuantitativo de metas"],
    type: "standard",
    headcount: 20,
    cargos99: 7,
    carrera: 13,
    legal: "CRBV Arts. 141 y 168; LOPPM Art. 88; LEFP Arts. 20 y 21"
  },
  {
    name: "Dirección de Administración y Finanzas (Hacienda Municipal)",
    objective: "Eficiencia fiscal y atracción de inversión con presupuesto por resultados.",
    actions: ["Presupuesto base cero por resultados", "Digitalización 100% de la recaudación", "Catastro digitalizado", "Estabilidad jurídica"],
    type: "reoriented",
    headcount: 19,
    cargos99: 4,
    carrera: 15,
    legal: "LOPPM Arts. 88, 163-170; LEFP Arts. 20 y 21"
  },
  {
    name: "Dirección de Seguridad Ciudadana y Policía (POLIGUAICAIPURO)",
    objective: "Meritocracia, policía comunitaria de proximidad y rescate del territorio.",
    actions: ["208 oficiales activos despolitizados", "Cámaras de vigilancia con IA", "Cero tolerancia a la corrupción", "Patrullaje rural y escolar"],
    type: "reoriented",
    headcount: 218,
    cargos99: 6,
    carrera: 4,
    legal: "CRBV Art. 332; Ley del Estatuto de la Función Policial; LOPPM Art. 88"
  },
  {
    name: "Dirección de Servicios Públicos y Concesiones (Ente Regulador)",
    objective: "Modelos de gestión eficiente: el municipio supervisa y regula, no opera.",
    actions: ["Concesión del aseo urbano y reciclaje", "Fiscalización de acueductos y pozos", "Mantenimiento vial tercerizado", "0 obreros directos"],
    type: "reoriented",
    headcount: 18,
    cargos99: 4,
    carrera: 14,
    legal: "CRBV Art. 178; LOPPM Arts. 88 y 152; LEFP Arts. 20 y 21"
  },
  {
    name: "Dirección de Infraestructura, Urbanismo y Catastro",
    objective: "Facilitación del desarrollo urbano sostenible y permisología inmediata.",
    actions: ["Permisología de construcción digital en 48h", "Catastro georreferenciado", "Inversión privada en obras", "Mapeo territorial"],
    type: "reoriented",
    headcount: 20,
    cargos99: 4,
    carrera: 16,
    legal: "LOPPM Art. 88; Ley de Geografía, Cartografía y Catastro Nacional"
  },
  {
    name: "Dirección de Desarrollo Social y Capital Humano (Agencia de Oportunidades)",
    objective: "Empoderamiento, no asistencialismo: red de protección focalizada.",
    actions: ["Programa Materno-Infantil hasta 5 años", "Atención a adultos mayores", "Alianzas con fundaciones", "Eliminación del carnet partidista"],
    type: "reoriented",
    headcount: 18,
    cargos99: 4,
    carrera: 14,
    legal: "CRBV Art. 178; LOPPM Art. 88; LEFP Arts. 20 y 21"
  },
  {
    name: "Dirección de Cultura y Turismo (Agencia de Fomento)",
    objective: "Patrimonio como motor de riqueza privada e identidad guaicaipureña.",
    actions: ["Rutas turísticas de San Pedro y El Jarillo", "Festivales con patrocinio privado", "Concesión de teatros y museos", "Patrimonio histórico"],
    type: "standard",
    headcount: 8,
    cargos99: 2,
    carrera: 6,
    legal: "LOPPM Art. 88; Ley de Protección y Defensa del Patrimonio Cultural"
  },
  {
    name: "Dirección de Deportes y Recreación (Agencia de Fomento)",
    objective: "Autosustentabilidad de canchas y complejos mediante clubes y ligas privadas.",
    actions: ["Concesión de instalaciones deportivas", "Ligas interparroquiales escolares", "Patrocinio empresarial", "Cero mantenimiento presupuestario"],
    type: "standard",
    headcount: 8,
    cargos99: 2,
    carrera: 6,
    legal: "LOPPM Art. 88; Ley del Deporte, Actividad Física y Educación Física"
  },
  {
    name: "Sindicatura Procuraduría Municipal (Bufete Municipal)",
    objective: "Garante de la legalidad, defensa patrimonial y seguridad jurídica para inversores.",
    actions: ["Dictamen de contratos de APP", "Defensa de la propiedad privada", "Fiscalización jurídica municipal", "Cero expropiaciones"],
    type: "standard",
    headcount: 10,
    cargos99: 3,
    carrera: 7,
    legal: "CRBV Art. 178; LOPPM Arts. 115-121; LEFP Arts. 20 y 21"
  },
  {
    name: "Unidad de Auditoría Interna (Control Fiscal Autónomo)",
    objective: "Control fiscal preventivo y sanción implacable a la corrupción.",
    actions: ["Auditorías en tiempo real", "Supervisión de compras y licitaciones", "Canal de denuncias anónimas", "Designación técnica por mérito"],
    type: "standard",
    headcount: 8,
    cargos99: 1,
    carrera: 7,
    legal: "Ley Orgánica de la Contraloría General de la República (LOCGRSNCF)"
  },
  {
    name: "Enlaces Parroquiales Ejecutivos (Descentralización Foránea)",
    objective: "Coordinación directa del Alcalde con las 6 parroquias foráneas sin trabas.",
    actions: ["6 Enlaces Parroquiales (Cargos 99)", "Atención directa de reclamos vecinales", "Coordinación de vouchers rurales", "Articulación comunitaria"],
    type: "new",
    headcount: 6,
    cargos99: 6,
    carrera: 0,
    legal: "LOPPM Arts. 88 y 122; LEFP Art. 21"
  }
];
