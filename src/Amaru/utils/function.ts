export default function badgeColor(age: string) {
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
  }
}
