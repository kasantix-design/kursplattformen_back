export function lagSlug(tittel: string): string {
  return tittel.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
}
