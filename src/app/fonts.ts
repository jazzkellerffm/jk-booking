import localFont from "next/font/local";

export const aceRegular = localFont({
  src: "../../public/fonts/Ace-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-ace",
  display: "swap",
});

export const aceMedium = localFont({
  src: "../../public/fonts/Ace-Medium.woff2",
  weight: "500",
  style: "normal",
  variable: "--font-ace-medium",
  display: "swap",
});

export const polySansNeutral = localFont({
  src: "../../public/fonts/PolySans-Neutral.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-polysans",
  display: "swap",
});

export const polySansNeutralItalic = localFont({
  src: "../../public/fonts/PolySans-NeutralItalic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-polysans-italic",
  display: "swap",
});

export const polySansBulky = localFont({
  src: "../../public/fonts/PolySans-Bulky.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-polysans-bulky",
  display: "swap",
});

export const fontVariables = [
  aceRegular.variable,
  aceMedium.variable,
  polySansNeutral.variable,
  polySansNeutralItalic.variable,
  polySansBulky.variable,
].join(" ");
