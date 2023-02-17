/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato"],
      display: ["Itim"],
    },
    colors: {
      surface: "#FFFFFF",
      onSurfaceHigh: "#000000",
      onSurfaceMedium: "#00000098",
      onSurfaceDisabled: "#00000060",
      primary: "#243763",
      primaryDarker: "#121D35",
      primaryDarkest: "#0E1526",
      onPrimaryHigh: "#FFFFFF",
      onPrimaryMedium: "#FFFFFF74",
      onPrimaryButton: "#FFFFFF05",
      onPrimaryButtonHover: "#FFFFFF10",
      accent: "#FF6E31",
      onAccentHigh: "#FFFFFF",
      onAccentMedium: "#FFFFFF74",
    },
  },
  plugins: [],
};
