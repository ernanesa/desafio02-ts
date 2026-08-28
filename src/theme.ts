import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#9413dc" },
          600: { value: "#7a0fb3" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
