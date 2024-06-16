import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'var(--font-fragment_mono)',
    body: 'var(--font-noto-sans)',
  }
});