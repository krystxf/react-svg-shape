import SvgGeneratorSection from "./sections/SvgGeneratorSection";
import { AnimatedBlobSection } from "./sections/AnimatedBlobSection";
import { BasicBlobSection } from "./sections/BasicBlobSection";
import { ComplexBlobSection } from "./sections/ComplexBlobSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-8">
        <SvgGeneratorSection />

        <BasicBlobSection />

        <AnimatedBlobSection />

        <ComplexBlobSection />
      </div>
      <Footer />
    </>
  );
}
