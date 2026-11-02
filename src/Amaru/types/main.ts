export interface Area {
  title: string
}

export interface Competencia {
  title: string
}

export interface Capacidades {
  capacidades: string[]
}

export interface Estandar {
  estandar: string
}

type RequireAtlestOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>> }[Keys]

export type Desempeno = RequireAtlestOne<DesempenoBase>

export interface DesempenoBase {
  '3'?: DesempenoAge[]
  '4'?: DesempenoAge[]
  '5'?: DesempenoAge[]
}

export const DESEMPENO_KEYS = ['3', '4', '5'] as const

export interface DesempenoAge {
  definicion: string
  ejemplo?: string
}

export interface CurriculoInicialData {
  areas: (Area & {
    competencias: (Competencia & Capacidades & Estandar & { desempenos: Desempeno })[]
  })[]
}
