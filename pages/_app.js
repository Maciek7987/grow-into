import { CartProvider } from "react-use-cart";
import "../styles/globals.scss";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const product = {
    id: "cjld2cjxh0000qzrmn831i7rn",
    name: "Book",
    price: 45,
    quantity: 1,
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grow Into Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <Navigation product={product} />
        <Component {...pageProps} product={product} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default MyApp;
