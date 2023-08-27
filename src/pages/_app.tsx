import { wrapper } from "@/redux/store";
import "@/styles/index.scss";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Amplify } from "aws-amplify";
import { awsConfig } from "@/configs";
import { Toaster } from "react-hot-toast";

Amplify.configure({
  Auth: {
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
    region: awsConfig.cognito.REGION,
    identityPoolRegion: awsConfig.cognito.IDENTITY_POOL_ID,
    userPoolId: awsConfig.cognito.USER_POOL_ID,
    userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID,
    mandatorySignIn: false,
    signUpVerificationMethod: "code",
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Toaster />
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
};

export default wrapper.withRedux(App);
