import { AnimatedBlob } from "./components/AnimatedBlob";
import { SvgBackground } from "./components/SvgBackground";
import SvgGenerator from "./docs/SvgGenerator";
import { AnimatedBlobDocs } from "./docs/AnimatedBlobDocs";
import { BasicBlobDocs } from "./docs/BasicBlobDocs";
import { DocsBlock } from "./components/DocsBlock";

function App() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <SvgGenerator />

      <BasicBlobDocs />

      <AnimatedBlobDocs />

      <DocsBlock
        title="Complex Blob"
        subtitle="⚠️ Works only in Chromium based browsers"
      >
        <SvgBackground className="size-full">
          <AnimatedBlob />
        </SvgBackground>
      </DocsBlock>
    </div>
  );
}

export default App;
