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
  },
};
