import { useEffect, useState } from "react";
import { generatePath, SvgShape } from "react-svg-shape";
import { CodeBlock } from "../components/CodeBlock";
import { DocsBlock } from "../components/DocsBlock";

const INTERVAL_DURATION = 1_000;
const generateShapePath = () => generatePath({ complexity: 16, contrast: 4 });

export const AnimatedBlobSection = () => {
  const [svgPath, setSvgPath] = useState(generateShapePath());

  useEffect(() => {
    const interval = setInterval(() => {
      setSvgPath(generateShapePath());
    }, INTERVAL_DURATION);

    setSvgPath(generateShapePath());

    return () => clearInterval(interval);
  }, [setSvgPath]);

  return (
    <DocsBlock
      title="Animated Blob"
      subtitle="⚠️ Works only in Chromium based browsers"
    >
      <CodeBlock
        code={`import { useEffect, useState } from "react";

const INTERVAL_DURATION = 1_000;
const generateShapePath = () => generatePath({ complexity: 16, contrast: 4 });

const SvgBlobAnimatedComponent = () => { 
  const [svgPath, setSvgPath] = useState(generateShapePath());

  useEffect(() => {
    const interval = setInterval(() => {
      setSvgPath(generateShapePath());
    }, INTERVAL_DURATION);

    setSvgPath(generateShapePath());

    return () => clearInterval(interval);
  }, [setSvgPath]);

  return (
  <SvgShape width={100} height={100}>
    <SvgShape.Path 
      svgPath={svgPath}
      colors={["#f87537", "#fba81f"]}
      style={{
        transition: \`all \${INTERVAL_DURATION / 1000}s linear\`,
      }}
    />
  </SvgShape>
  );
}`}
      />

      <SvgShape className="size-96">
        <SvgShape.Path
          svgPath={svgPath}
          colors={["#f87537", "#fba81f"]}
          style={{
            transition: `all ${INTERVAL_DURATION / 1000}s linear`,
          }}
        />
      </SvgShape>
    </DocsBlock>
  );
};
