import "../styles/globals.scss";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import LayoutMain from "../components/layout/LayoutMain";

function RostiApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </RecoilRoot>
  );
}

export default RostiApp;
