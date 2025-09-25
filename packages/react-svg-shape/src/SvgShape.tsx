import { useId, type SVGProps } from "react";

export const SvgShapeWrapper = ({
  children,
  ...rest
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {children}
    </svg>
  );
};

export const SvgShapePath = ({
  svgPath,
  colors,
  hasStroke,
  ...rest
}: {
  svgPath: string;
  colors: [string, string];
  hasStroke?: boolean;
} & SVGProps<SVGPathElement>) => {
  const id = useId();
  const gradientId = `gradient-${id}`;
  const gradientIdUrl = `url(#${gradientId})`;

  const fill = hasStroke ? "none" : colors[1] ? gradientIdUrl : colors[0];
  const stroke = hasStroke ? (colors[1] ? gradientIdUrl : colors[0]) : "none";
  const strokeWidth = hasStroke ? "1" : "0";

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="1" y2="0">
          <stop stopColor={colors[0]} offset="0%" />
          <stop stopColor={colors[1]} offset="100%" />
        </linearGradient>
      </defs>

      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d={svgPath}
        width="100%"
        height="100%"
        {...rest}
      />
    </>
  );
};

export const SvgShape = Object.assign(SvgShapeWrapper, {
  Path: SvgShapePath,
});
