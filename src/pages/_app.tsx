import { wrapper } from "@/redux/store";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}

export default wrapper.withRedux(App);
