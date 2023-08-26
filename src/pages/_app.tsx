import { wrapper } from "@/redux/store";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}

export default wrapper.withRedux(App);
