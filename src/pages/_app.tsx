import HorizontalLine from "@/components/HorizontalLine";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import UpdateBanner from "@/components/layout/UpdateBanner";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";

const extendedTheme = extendTheme({
  ...theme,
  config: {
    initialColorMode: "light", // Set initial color mode to "light"
    useSystemColorMode: false,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendedTheme}>
      <div className="container">
        {/* <UpdateBanner /> */}
        <Header />
        <Box maxW="1200px" mx="auto" px={4}>
          <Component {...pageProps} />
        </Box>
        {/* <style global jsx>{`
          body {
            background-image: url("${colorMode === "light"
              ? "/assets/background-light.png"
              : "/assets/background-dark.png"}");
          }
        `}</style> */}

        <HorizontalLine />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
