import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/sections/Footer";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
