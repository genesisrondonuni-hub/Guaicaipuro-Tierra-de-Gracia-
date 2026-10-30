export interface Principle {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Axis {
  id: number;
  title: string;
  description: string;
  details: string[];
  longDescription?: string;
  educationImpact?: string;
}

export interface Parish {
  id: string;
  name: string;
  type: string;
  description: string;
  educationInitiatives?: string[];
  plans?: {
    shortTerm: string[];
    mediumTerm: string[];
    longTerm: string[];
  };
}

export interface PositionItem {
  name: string;
  type: 'Electo' | 'c99' | 'carr' | 'pol' | string;
  count: number;
  tag: string;
  desc: string;
}

export interface OfficeDepartment {
  id: number;
  name: string;
  desc: string;
  tot: number;
  c99: number;
  carr: number;
  pol: number;
  legal: string;
  focus: string;
  positions: PositionItem[];
  isEducation?: boolean;
}

export interface Directorate {
  name: string;
  objective: string;
  actions: string[];
  type: 'reoriented' | 'new' | 'standard';
  headcount?: number;
  cargos99?: number;
  carrera?: number;
  legal?: string;
}

export interface EducationPillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  metrics: string;
}
