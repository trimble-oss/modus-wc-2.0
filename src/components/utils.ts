/*
 * Generates a random string of the specified length.
 * @param length { number } - The length of the random string to generate.
 * @returns { string } - A random string of the specified length.
 */
export function generateRandomId(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
