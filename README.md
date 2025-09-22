# React SVG Shape


<img src="https://github.com/user-attachments/assets/3a473b65-cdd9-4a00-abbd-66fcd9b52644" width="200px" style="margin: auto;"/>


# Installation
[NPM](https://www.npmjs.com/package/react-svg-shape)
```bash
npm i react-svg-shape
```

## Basic Blob

```tsx
const svgPath = generatePath({ complexity: 16, contrast: 4 });
          
const SvgBlobComponent = () => {
    return (
      <SvgShape width={100} height={100}>
        <SvgShape.Path svgPath={svgPath} colors={["#f87537", "#fba81f"]} />
      </SvgShape>
    );
}
```

## Animated Blob
> [!IMPORTANT]
> SVG animations are supported only in Chromium based browsers

```tsx
import { useEffect, useState } from "react";

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
        transition: `all ${INTERVAL_DURATION / 1000}s linear`,
      }}
    />
  </SvgShape>
  );
}
```

<img src="https://github.com/user-attachments/assets/bf581601-d02e-4b5c-9eb9-8badac486634" alt="Animated Blob" width="100%"/>

## Honorable Mention
https://www.softr.io/tools/svg-shape-generator