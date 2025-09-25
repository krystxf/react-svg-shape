import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ code }: { code: string }) => {
  return (
    <Prism language="tsx" style={atomDark}>
      {code}
    </Prism>
  );
};
