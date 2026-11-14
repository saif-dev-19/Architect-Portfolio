
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: "#080808" },
          surface: { value: "#121212" },
          gold: { value: "#C9A45C" },
          lightGold: { value: "#E5C98B" },
          white: { value: "#F5F5F5" },
          muted: { value: "#999999" },
        },
      },
    },
  },
});

export function Provider({ children }) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}
