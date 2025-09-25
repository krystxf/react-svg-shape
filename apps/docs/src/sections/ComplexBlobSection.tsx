import { AnimatedBlob } from "../components/AnimatedBlob";
import { DocsBlock } from "../components/DocsBlock";

export const ComplexBlobSection = () => {
  return (
    <DocsBlock
      title="Complex Blob"
      subtitle="⚠️ Works only in Chromium based browsers"
    >
      <AnimatedBlob className="mx-auto max-h-[60vh] aspect-square w-full" />
    </DocsBlock>
  );
};
