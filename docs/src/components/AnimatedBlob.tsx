import { useState, useEffect, useCallback } from "react";
import { generatePath, SvgShape } from "react-svg-shape";
import { motion } from "motion/react";

const MotionSvgShapePath = motion.create(SvgShape.Path);

const COLORS: [string, string] = ["#f87537", "#fba81f"];
const INTERVAL_DURATION = 2_000;

export const AnimatedBlob = () => {
  const handleGenerateShapes = useCallback(
    () => [
      generatePath({ complexity: 16, contrast: 0 }),
      generatePath({ complexity: 16, contrast: 2 }),
      generatePath({ complexity: 16, contrast: 4 }),
      generatePath({ complexity: 16, contrast: 6 }),
    ],
    []
  );

  const [shapes, setShapes] = useState<string[]>(handleGenerateShapes);

  useEffect(() => {
    const interval = setInterval(() => {
      setShapes(handleGenerateShapes());
    }, INTERVAL_DURATION);

    setShapes(handleGenerateShapes());

    return () => clearInterval(interval);
  }, [setShapes, handleGenerateShapes]);

  return (
    <SvgShape viewBox="-150 -150 300 300" className="size-full">
      {shapes.map((shape, index) => (
        <motion.g
          key={index}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1.0 + Math.abs(index - 4) * 0.4,
          }}
          transition={{
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.1,
            },
          }}
        >
          <MotionSvgShapePath
            svgPath={shape}
            colors={COLORS}
            opacity={index === 3 ? 1 : (index + 1) * 0.2}
            style={{
              transition: `all ${INTERVAL_DURATION / 1000}s linear`,
            }}
          />
        </motion.g>
      ))}
    </SvgShape>
  );
};
