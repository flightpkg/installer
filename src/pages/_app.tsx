import type { AppProps } from 'next/app';
import Head from 'next/head';
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FlightPKG.</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
