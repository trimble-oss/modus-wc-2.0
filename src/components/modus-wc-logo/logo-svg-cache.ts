// Module-level cache — fetch each SVG file only once across all instances
export const svgCache = new Map<string, Promise<string>>();
