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

export function badgeColorInicial(age: InicialDesempenosKeys) {
  switch (age) {
    case '3':
      return 'bg-green-400 text-green-700'
    case '4':
      return 'bg-amber-400 text-amber-700'
    case '5':
      return 'bg-red-400 text-red-700'
  }
}

export function badgeColorPrimaria(grade: PrimariaDesempenosKeys) {
  switch (grade) {
    case '1':
      return 'bg-sky-400 text-sky-700'
    case '2':
      return 'bg-green-400 text-grenn-700'
    case '3':
      return 'bg-amber-400 text-amber-700'
    case '4':
      return 'bg-red-400 text-red-700'
    case '5':
      return 'bg-pink-400 text-pink-700'
    case '6':
      return 'bg-purple-400 text-purple-700'
  }
}

export function badgeCycle(cycle: CiclosKeys) {
  switch (cycle) {
    case 'ciclo3':
      return 'bg-red-400 text-red-700'
    case 'ciclo4':
      return 'bg-amber-400 text-amber-700'
    case 'ciclo5':
      return 'bg-green-400 text-green-700'
  }
}
