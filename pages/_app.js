import "../styles/globals.css";
// import AppProvider from "../NotWorkingContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
