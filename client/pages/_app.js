import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nev";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
