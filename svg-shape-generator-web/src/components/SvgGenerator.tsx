import { useState, useEffect, useCallback, type FC } from "react";
import {
  generatePath,
  createSVGContent,
  createSimpleSVGContent,
} from "../lib/shape-generator";
import { downloadSVG } from "../utils/downloadSVG.utils";
import { copySVGToClipboard } from "../utils/clipboard.utils";
import { SvgShape } from "../lib/SvgShape";

interface SvgGeneratorProps {
  className?: string;
}

const SvgGenerator: FC<SvgGeneratorProps> = () => {
  const [angle, setAngle] = useState<number>(8);
  const [curve, setCurve] = useState<number>(6);
  const [color1, setColor1] = useState<string>("#f87537");
  const [color2, setColor2] = useState<string>("#fba81f");
  const [stroke, setStroke] = useState<boolean>(false);
  const [svgPath, setSvgPath] = useState<string>("");

  // Generate path using library function
  const generateShapePath = useCallback(
    (angle: number, curve: number): string => {
      return generatePath({
        complexity: angle,
        contrast: curve,
      });
    },
    []
  );

  const generateRandomShape = useCallback(() => {
    const newPath = generateShapePath(angle, curve);
    setSvgPath(newPath);
  }, [angle, curve, generateShapePath]);

  // Generate initial shape
  useEffect(() => {
    generateRandomShape();
  }, [generateRandomShape]);

  // Update shape when parameters change
  useEffect(() => {
    const newPath = generateShapePath(angle, curve);
    setSvgPath(newPath);
  }, [angle, curve, generateShapePath]);

  const handleDownloadSVG = () => {
    const svgContent = createSVGContent(svgPath, color1, color2, stroke);
    downloadSVG(svgContent, "generated-shape.svg");
  };

  const handleCopyToClipboard = async () => {
    const svgContent = createSimpleSVGContent(svgPath, color1, color2, stroke);

    try {
      await copySVGToClipboard(svgContent);
      alert("SVG copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-8">
        <h2 className="text-gray-800 mb-2 text-3xl font-semibold">
          SVG Shape Generator
        </h2>
        <p className="text-gray-600 text-lg">
          Create beautiful organic shapes with customizable parameters
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="mb-6">
            <label
              htmlFor="angle-slider"
              className="block mb-2 font-medium text-gray-800 text-sm"
            >
              Complexity: {angle}
            </label>
            <input
              id="angle-slider"
              type="range"
              min="3"
              max="20"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-gray-300 outline-none appearance-none cursor-pointer slider-thumb"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="curve-slider"
              className="block mb-2 font-medium text-gray-800 text-sm"
            >
              Contrast: {curve}
            </label>
            <input
              id="curve-slider"
              type="range"
              min="0"
              max="12"
              value={curve}
              onChange={(e) => setCurve(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg bg-gray-300 outline-none appearance-none cursor-pointer slider-thumb"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="color1-picker"
              className="block mb-2 font-medium text-gray-800 text-sm"
            >
              Primary Color:
            </label>
            <input
              id="color1-picker"
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-full h-10 border-none rounded-lg cursor-pointer shadow-sm"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="color2-picker"
              className="block mb-2 font-medium text-gray-800 text-sm"
            >
              Secondary Color:
            </label>
            <input
              id="color2-picker"
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-full h-10 border-none rounded-lg cursor-pointer shadow-sm"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={stroke}
                onChange={(e) => setStroke(e.target.checked)}
                className="mr-2 w-4 h-4 accent-blue-500"
              />
              Stroke Mode
            </label>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={generateRandomShape}
              className="px-4 py-3 rounded-lg text-center bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
            >
              Generate Random
            </button>
            <button
              onClick={handleDownloadSVG}
              className="px-4 py-3 rounded-lg text-center bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
            >
              Download SVG
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="px-4 py-3 rounded-lg text-center bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
            >
              Copy SVG
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center bg-white rounded-xl p-8 min-h-[400px]">
          <div className="w-72 h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 bg-[length:20px_20px] bg-[linear-gradient(45deg,#f8f9fa_25%,transparent_25%),linear-gradient(-45deg,#f8f9fa_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8f9fa_75%),linear-gradient(-45deg,transparent_75%,#f8f9fa_75%)]">
            <SvgShape>
              <SvgShape.Path
                svgPath={svgPath}
                colors={[color1, color2]}
                hasStroke={stroke}
              />
            </SvgShape>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgGenerator;
