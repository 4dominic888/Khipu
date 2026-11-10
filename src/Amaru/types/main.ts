type RequireAtlestOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>> }[Keys]

export interface Area {
  title: string
}

export interface Competencia {
  title: string
}

export interface Capacidades {
  capacidades: string[]
}

export interface EstandarInicial {
  estandar: string
}

export type EstandarPrimaria = RequireAtlestOne<Ciclos>
export interface Ciclos {
  ciclo3?: string
  ciclo4?: string
  ciclo5?: string
}

export type DesempenoInicial = RequireAtlestOne<DesempenoInicialBase>
export type DesempenoPrimaria = RequireAtlestOne<DesempenoPrimariaBase>

export interface DesempenoInicialBase {
  '3'?: Desempeno[]
  '4'?: Desempeno[]
  '5'?: Desempeno[]
}

export interface DesempenoPrimariaBase {
  '1'?: Desempeno[]
  '2'?: Desempeno[]
  '3'?: Desempeno[]
  '4'?: Desempeno[]
  '5'?: Desempeno[]
  '6'?: Desempeno[]
}

export const CICLOS_KEYS = ['ciclo3', 'ciclo4', 'ciclo5'] as const
export const INICIAL_DESEMPENO_KEYS = ['3', '4', '5'] as const
export const PRIMARIA_DESEMPENO_KEYS = ['1', '2', '3', '4', '5', '6'] as const

export type CiclosPossibleKeys = 'ciclo3' | 'ciclo4' | 'ciclo5'
export type InicialDesempenosPossibleKeys = '3' | '4' | '5'
export type PrimariaDesempenosPossibleKeys = '1' | '2' | '3' | '4' | '5' | '6'

export type EducationType = 'inicial' | 'primaria'

export interface Desempeno {
  def: string
  ejemplo?: string
  list?: string[]
}

export interface CurriculoInicialData {
  areas: (Area & {
    competencias: (Competencia &
      Capacidades & { estandar: EstandarInicial } & { desempenos: DesempenoInicial })[]
  })[]
}

export interface CurriculoPrimariaData {
  areas: (Area & {
    competencias: (Competencia &
      Capacidades & { estandar: EstandarPrimaria } & { desempenos: DesempenoPrimaria })[]
  })[]
}
