export function downloadSVG(
  svgContent: string,
  filename: string = "generated-shape.svg"
): void {
  const blob = new Blob([svgContent], { type: "image/svg+xml" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
