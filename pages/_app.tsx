// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WASMContextProvider } from "../context/WASMContext";

import Head from "next/head";
import { AppContextProvider } from "../context/AppContext";
import { NextPage } from "next";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <WASMContextProvider>
      <AppContextProvider>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </AppContextProvider>
    </WASMContextProvider>
  );
};

export default App;
