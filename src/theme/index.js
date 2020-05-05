import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Go to https://smart-swatch.netlify.com/ to easily generate a new color
    // palette.
    brand: {
      50: "#d7ffff",
      100: "#acfdfe",
      200: "#7efbfb",
      300: "#4ef8f8",
      400: "#22f6f6",
      500: "#09dddd",
      600: "#00acac",
      700: "#007c7c",
      800: "#004b4b",
      900: "#001b1b",
    },
    col: {
      50: "#eee6ff",
      100: "#c9b7fb",
      200: "#a587f6",
      300: "#8158f2",
      400: "#5e28ee",
      500: "#4511d5",
      600: "#350da5",
      700: "#260876",
      800: "#160448",
      900: "#08001b",
    },
    col2: {
      50: "#efe4ff",
      100: "#cbb3ff",
      200: "#a981fd",
      300: "#864efc",
      400: "#641efb",
      500: "#4c06e2",
      600: "#3a03b0",
      700: "#2a017e",
      800: "#19004d",
      900: "#09001d",
    },
    col3: {
      50: "#f0eff6",
      100: "#d1d0de",
      200: "#b3afc9",
      300: "#948fb6",
      400: "#766fa2",
      500: "#5d5589",
      600: "#48426a",
      700: "#34304b",
      800: "#1f1d2d",
      900: "#0a0910",
    },
  },
};
