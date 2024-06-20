import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Alias pour les chemins d'import
    alias: {
      "@": "/src", // Alias pour le répertoire racine src
      "@pages": "/src/pages", // Alias pour le répertoire des pages
      "@components": "/src/components", // Alias pour le répertoire des composants
      "@assets": "/src/assets", // Alias pour le répertoire des assets
      "@datas": "/src/datas", // Alias pour le répertoire des données (datas)
      "@styles": "/src/styles", // Alias pour le répertoire des styles
    },
  },
});
