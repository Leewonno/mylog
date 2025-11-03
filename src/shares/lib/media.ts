import { css, CSSObject, Interpolation } from "styled-components";

type DeviceType = "desktop" | "phone";

const sizes: Record<DeviceType, number> = {
  desktop: 1200,
  phone: 800,
};

type StyledInterpolation = Interpolation<{}>;

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: StyledInterpolation[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {} as Record<DeviceType, (first: CSSObject | TemplateStringsArray, ...interpolations: StyledInterpolation[]) => ReturnType<typeof css>>);

export { media };