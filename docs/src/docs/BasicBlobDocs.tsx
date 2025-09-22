import { generatePath, SvgShape } from "react-svg-shape";
import { CodeBlock } from "../components/CodeBlock";
import { DocsBlock } from "../components/DocsBlock";

const svgPath = generatePath({ complexity: 16, contrast: 4 });

export const BasicBlobDocs = () => {
  return (
    <DocsBlock title="Basic Blob">
      <CodeBlock
        code={`const svgPath = generatePath({ complexity: 16, contrast: 4 });
          
const SvgBlobComponent = () => {
    return (
      <SvgShape width={100} height={100}>
        <SvgShape.Path svgPath={svgPath} colors={["#f87537", "#fba81f"]} />
      </SvgShape>
    );
}`}
      />
      <SvgShape className="size-96">
        <SvgShape.Path svgPath={svgPath} colors={["#f87537", "#fba81f"]} />
      </SvgShape>
    </DocsBlock>
  );
};
