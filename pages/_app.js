import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CartProvider } from "react-use-cart";
import NProgress from "nprogress";
import "../styles/globals.scss";
import "nprogress/nprogress.css";

import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [canIHideNavByScroll, setcanIHideNavByScroll] = useState(true);
  const router = useRouter();
  const product = {
    id: "cjld2cjxh0000qzrmn831i7rn",
    name: "Book",
    price: 45,
    quantity: 1,
  };
  const start = () => {
    NProgress.start();
    setcanIHideNavByScroll(false);
  };
  const done = () => {
    NProgress.done();
    setcanIHideNavByScroll(true);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", done);
    router.events.on("routeChangeError", done);
    return () => {
      router.events.off("routeChangeStart", () => start);
      router.events.off("routeChangeComplete", done);
      router.events.off("routeChangeError", done);
    };
  }, []);
  // If the component is unmounted, unsubscribe
  // from the event with the `off` method:

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
        <Navigation product={product} hide={canIHideNavByScroll} />
        <Component {...pageProps} product={product} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default MyApp;
