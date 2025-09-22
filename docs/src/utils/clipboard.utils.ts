export async function copySVGToClipboard(svgContent: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(svgContent);
  } catch (err) {
    console.error("Failed to copy to clipboard: ", err);
    throw err;
  }
}
