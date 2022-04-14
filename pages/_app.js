import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Layout>
      <Head>
        <title>CHOYS</title>
        <meta name="description" content="Your employee welbeing partner" />
        <link rel="choys icon" href="/brand/choys.svg" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
