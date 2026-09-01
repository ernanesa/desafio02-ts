import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        dio: {
          canvas: { value: "#1E192C" },
          card: { value: "#201A31" },
          border: { value: "#3A3350" },
          purple: { value: "#7F28B5" },
          purpleMuted: { value: "#8647AD" },
          lavender: { value: "#BF93DA" },
          cta: { value: "#B800E7" },
          ctaHover: { value: "#D01AFF" },
          text: { value: "#FFFFFF" },
          textMuted: { value: "#C9C4D6" },
          error: { value: "#F26D79" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
