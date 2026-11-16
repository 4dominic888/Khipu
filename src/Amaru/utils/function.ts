import type {
  DataInicial,
  DataPrimaria,
  AvailableProgramaData,
  CiclosKeys,
  InicialDesempenosKeys,
  PrimariaDesempenosKeys,
} from '../types/main'

export function parseAreas(data: unknown): AvailableProgramaData {
  if (typeof data !== 'object' || data === null || !('type' in data)) {
    throw new Error('Json invalido')
  }

  switch (data.type) {
    case 'inicial':
      return data as unknown as DataInicial
    case 'primaria':
      return data as unknown as DataPrimaria
    default:
      throw new Error('Areas desconocida u no implementada por el sistema')
  }
}

export const backgroundColors: Record<string, string> = {
  green: 'bg-green-400',
  amber: 'bg-amber-400',
  red: 'bg-red-400',
  sky: 'bg-sky-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
}

export const foregroundColors: Record<string, string> = {
  green: 'text-green-400',
  amber: 'text-amber-400',
  red: 'text-red-400',
  sky: 'text-sky-400',
  pink: 'text-pink-400',
  purple: 'text-purple-400',
}

type CommonEnumKeys = InicialDesempenosKeys | PrimariaDesempenosKeys | CiclosKeys
export function badgeSelectColor<T extends CommonEnumKeys>(
  text: string,
  parse: (val: string) => T,
  getColor: (enumKey: T) => string,
) {
  return getColor(parse(text))
}

export function badgeColorInicial(age: InicialDesempenosKeys) {
  switch (age) {
    case '3':
      return 'green'
    case '4':
      return 'amber'
    case '5':
      return 'red'
  }
}

export function badgeColorPrimaria(grade: PrimariaDesempenosKeys) {
  switch (grade) {
    case '1':
      return 'sky'
    case '2':
      return 'green'
    case '3':
      return 'amber'
    case '4':
      return 'red'
    case '5':
      return 'pink'
    case '6':
      return 'purple'
  }
}

export function badgeColorCycle(cycle: CiclosKeys) {
  switch (cycle as CiclosKeys) {
    case 'ciclo3':
      return 'red'
    case 'ciclo4':
      return 'amber'
    case 'ciclo5':
      return 'green'
  }
}
