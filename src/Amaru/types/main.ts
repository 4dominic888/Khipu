type RequireAtlestOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  { [K in Keys]-?: Required<Pick<T, K>> & Partial<Omit<T, K>> }[Keys]

const createEnumerator = <const T extends readonly string[]>(values: T) => ({
  values,
  parse: (val: string): T[number] => {
    const match = values.find((v) => v === val)
    if (match === undefined) throw new Error(`Invalid type of data ${String(val)}`)
    return match
  },
  is: (val: unknown): val is T[number] => values.includes(val as T[number]),
})
type EnumType<T extends { values: readonly string[] }> = T['values'][number]

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
  estandar: string // ciclo 2
}

export type EstandarPrimaria = RequireAtlestOne<Ciclos>

export type Ciclos = Partial<Record<CiclosKeys, string>>
export const CiclosKeys = createEnumerator(['ciclo3', 'ciclo4', 'ciclo5'] as const)
export type CiclosKeys = EnumType<typeof CiclosKeys>
export const CICLOS_KEYS_LABELS: Record<CiclosKeys, string> = {
  ciclo3: 'Ciclo 3',
  ciclo4: 'Ciclo 4',
  ciclo5: 'Ciclo 5',
}

// 3, 4 y 5 años
export const InicialDesempenosKeys = createEnumerator(['3', '4', '5'] as const)
export type InicialDesempenosKeys = EnumType<typeof InicialDesempenosKeys>
export const INICIAL_DESEMPENO_LABELS: Record<InicialDesempenosKeys, string> = {
  '3': '3 años',
  '4': '4 años',
  '5': '5 años',
}

// 1ro a 6to grado
export const PrimariaDesempenosKeys = createEnumerator(['1', '2', '3', '4', '5', '6'] as const)
export type PrimariaDesempenosKeys = EnumType<typeof PrimariaDesempenosKeys>
export const PRIMARIA_DESEMPENO_LABELS: Record<PrimariaDesempenosKeys, string> = {
  '1': '1° grado',
  '2': '2° grado',
  '3': '3° grado',
  '4': '4° grado',
  '5': '5° grado',
  '6': '6° grado',
}

// Garantiza al menos un aula/grado/año en el tipo
export type DesempenoInicial = RequireAtlestOne<Partial<Record<InicialDesempenosKeys, Desempeno[]>>>
export type DesempenoPrimaria = RequireAtlestOne<
  Partial<Record<PrimariaDesempenosKeys, Desempeno[]>>
>

export type EducationType = 'inicial' | 'primaria'

export interface Desempeno {
  def: string
  ejemplo?: string // Cuando inicia en ". Ejemplo: "
  list?: string[] // Para algunos desempeños que incluyan listas
}

// Para parsear los json de las areas curriculares
export type AreaInicial = Area & {
  competencias: (Competencia &
    Capacidades & { estandar: EstandarInicial } & { desempenos: DesempenoInicial })[]
}

export type AreaPrimaria = Area & {
  competencias: (Competencia &
    Capacidades & { estandar: EstandarPrimaria } & { desempenos: DesempenoPrimaria })[]
}

export interface DataInicial {
  areas: AreaInicial[]
}

export interface DataPrimaria {
  areas: AreaPrimaria[]
}

export type AvailableProgramaData = DataInicial | DataPrimaria
