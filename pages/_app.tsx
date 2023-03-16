import "../styles/globals.css";
import type { AppProps } from "next/app";
import useProgress from "../util/progress";

function MyApp({ Component, pageProps }: AppProps) {
  useProgress();
  return <Component {...pageProps} />;
}

export default MyApp;
