import Typography from "typography";
import fairyGatesTheme from "typography-theme-fairy-gates";
fairyGatesTheme.headerFontFamily = [
  "Roboto",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif"
];
fairyGatesTheme.bodyFontFamily = [
  "Roboto",
  "Helvetica Neue",
  "Helvetica",
  "Arial",
  "sans-serif"
];
const typography = new Typography(fairyGatesTheme);
const { rhythm, scale } = typography

export { rhythm, scale, typography as default };
