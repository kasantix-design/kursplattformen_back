export function erGyldigEpost(epost: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)
}
