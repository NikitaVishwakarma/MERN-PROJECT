import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nev";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>
      <Nav />
      <ToastContainer position="top-right" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
