import { persistor, store } from "@/store";
import "@/styles/globals.css";
import { theme } from "@/theme";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <AppCacheProvider>
            <ThemeProvider {...{ theme }}>
              <Component {...pageProps} />
            </ThemeProvider>
          </AppCacheProvider>
        </Provider>
      </PersistGate>
    </React.Fragment>
  );
}
