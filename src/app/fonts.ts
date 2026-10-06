import localFont from "next/font/local";

/** Display — hero headline and major editorial headings only. */
export const gustavo = localFont({
  src: [
    { path: "../../public/fonts/Gustavo-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Gustavo-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-gustavo",
  display: "swap",
});

/** Interface — body, descriptions, functional text. */
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

/** Buttons, pills, labels, navigation. */
export const polySansBulky = localFont({
  src: "../../public/fonts/PolySans-Bulky.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-polysans-bulky",
  display: "swap",
});

export const fontVariables = [
  gustavo.variable,
  polySansNeutral.variable,
  polySansNeutralItalic.variable,
  polySansBulky.variable,
].join(" ");
