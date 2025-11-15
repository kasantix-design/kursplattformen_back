export async function lagreVideoOpptak(url: string, kursId: string) {
  // Lagres via Jibri, Jitsi eller tredjepart
  return { url, kursId, dato: new Date() }
}
