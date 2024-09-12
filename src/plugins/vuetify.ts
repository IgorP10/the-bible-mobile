// vuetify.ts

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, useTheme } from "vuetify";

// Criar uma instância do Vuetify
const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: "#FFD700", // Gold
          secondary: "#424242", // Dark Gray
          accent: "#82B1FF", // Light Blue
          error: "#FF5252", // Red
          info: "#2196F3", // Blue
          success: "#4CAF50", // Green
          warning: "#FFC107", // Amber
          background: "#1f2937", // Dark Gray
          customColor: "#2c3a4e",
          headerBackground: "#293647",
        },
      },
      light: {
        dark: false,
        colors: {
          primary: "#1f2937", // Light Gold (brighter version of dark primary)
          secondary: "#B0BEC5", // Light Gray
          accent: "#03A9F4", // Sky Blue (lighter version of dark accent)
          error: "#FF5252", // Red
          info: "#2196F3", // Blue
          success: "#4CAF50", // Green
          warning: "#FFC107", // Amber
          background: "#E0E0E0", // Light Gray (for background)
          customColor: "#CFD8DC",
          headerBackground: "#CFD8DC",
        },
      },
    },
  },
});

export { vuetify, useTheme };
