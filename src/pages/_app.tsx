import "@/styles/globals.css";
import type { AppProps } from "next/app";
import themeContext from "@/components/themeContext";
import React from "react";
import { themeConfig } from "@/config/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState(false);
  const { light, dark } = themeConfig;
  return (
    <themeContext.Provider
      value={{
        themeProps: mode ? light : dark,
        onToggle: (v) => setMode(v),
      }}
    >
      <Component {...pageProps} />
    </themeContext.Provider>
  );
}
