/*
 * Generates a random string of the specified length.
 * @param length The length of the random string to generate.
 * @returns A random string of the specified length.
 */
export function generateRandomId(length: number): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
