import React from "react";
import App from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
