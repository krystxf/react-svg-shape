import { range, scaleLinear, radialLine, curveBasisClosed } from "d3";

const d3 = {
  range,
  scaleLinear,
  radialLine,
  curveBasisClosed,
};

export function roundPath(path: string, precision: number = 0.1): string {
  if (!path) return "";
  const query = /[\d.-][\d.e-]*/g;
  return path.replace(query, (n: string) =>
    String(Math.round(Number(n) * (1 / precision)) / (1 / precision))
  );
}

export function generateBlobShape(data: number[]): string {
  // Create polar coordinates data
  const polarData = data.map((radius, i) => {
    const angle = (i / data.length) * 2 * Math.PI;
    return [angle, Math.abs(radius)] as [number, number];
  });

  const shapeGenerator = d3
    .radialLine<[number, number]>()
    .angle((d) => d[0])
    .curve(d3.curveBasisClosed)
    .radius((d) => d[1]);

  return shapeGenerator(polarData) || "";
}

export function generateData(complexity: number, contrast: number): number[] {
  const scale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([50 - ((50 / 12) * contrast - 0.01), 50]);
  return d3.range(complexity).map(() => scale(Math.random()));
}

export type ShapeGeneratorOptions = {
  complexity: number;
  contrast: number;
  precision?: number;
};

export function generatePath(options: ShapeGeneratorOptions): string {
  const { complexity, contrast, precision = 0.1 } = options;
  const initialData = generateData(complexity, contrast);
  return roundPath(generateBlobShape(initialData) + "Z", precision);
}

export function createSVGContent(
  path: string,
  color1: string,
  color2?: string,
  stroke: boolean = false
): string {
  const fillColor = stroke ? "none" : color2 ? "url(#gradient)" : color1;

  const strokeColor = stroke ? (color2 ? "url(#gradient)" : color1) : "none";

  const strokeWidth = stroke ? "1" : "0";

  return `<?xml version="1.0" standalone="no"?>
<svg id="generated-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs> 
    <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
      <stop stop-color="${color1}" offset="0%"></stop>
      <stop stop-color="${color2 || color1}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <path fill="${fillColor}" 
        stroke="${strokeColor}" 
        stroke-width="${strokeWidth}"
        d="${path}" 
        width="100%" 
        height="100%" 
        transform="translate(50 50)"/>
</svg>`;
}

export function createSimpleSVGContent(
  path: string,
  color1: string,
  color2?: string,
  stroke: boolean = false
): string {
  const fillColor = stroke ? "none" : color2 ? "url(#gradient)" : color1;

  const strokeColor = stroke ? (color2 ? "url(#gradient)" : color1) : "none";

  const strokeWidth = stroke ? "1" : "0";

  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs> 
    <linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
      <stop stop-color="${color1}" offset="0%"></stop>
      <stop stop-color="${color2 || color1}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <path fill="${fillColor}" 
        stroke="${strokeColor}" 
        stroke-width="${strokeWidth}"
        d="${path}" 
        width="100%" 
        height="100%" 
        transform="translate(50 50)"/>
</svg>`;
}
