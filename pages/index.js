import Head from "next/head";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import SectionFirst from "../components/SectionFirst";
import SectionSecond from "../components/SectionSecond";
import SectionThird from "../components/SectionThird";
import SectionFourth from "../components/SectionFourth";
import SectionPages from "../components/SectionPages";
import SectionPictures from "../components/SectionPictures";
import SectionShop from "../components/SectionShop";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionPages />
      <SectionPictures />
      <SectionShop />
      <Footer />
    </>
  );
}
