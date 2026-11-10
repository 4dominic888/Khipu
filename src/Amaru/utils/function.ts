export function badgeColorInicial(age: string) {
  switch (age) {
    case '3 años':
    case '3':
      return 'bg-green-400 text-green-700'
    case '4 años':
    case '4':
      return 'bg-amber-400 text-amber-700'
    case '5 años':
    case '5':
      return 'bg-red-400 text-red-700'
    default:
      return 'bg-gray-400 text-gray-700'
  }
}

export function badgeColorPrimaria(grade: string) {
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
    default:
      return 'bg-gray-400 text-gray-700'
  }
}

export function badgeCycle(cycle: string) {
  switch (cycle) {
    case 'ciclo3':
      return 'bg-red-400 text-red-700'
    case 'ciclo4':
      return 'bg-amber-400 text-amber-700'
    case 'ciclo5':
      return 'bg-green-400 text-green-700'
    default:
      return 'bg-gray-400 text-gray-700'
  }
}

export function ParseCycleName(cycle: string) {
  switch (cycle) {
    case 'ciclo3':
      return 'Ciclo 3'
    case 'ciclo4':
      return 'Ciclo 4'
    case 'ciclo5':
      return 'Ciclo 5'
    default:
      return 'Ciclo no identificado :(((('
  }
}
