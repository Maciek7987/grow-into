import Header from "../components/Header";
import SectionFirst from "../components/SectionFirst";
import SectionSecond from "../components/SectionSecond";
import SectionThird from "../components/SectionThird";
import SectionFourth from "../components/SectionFourth";
import SectionPages from "../components/SectionPages";
import SectionPictures from "../components/SectionPictures";
import SectionShop from "../components/SectionShop";

export default function Home({product}) {
  return (
    <>
      <Header product={product} />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
      <SectionPages />
      <SectionPictures />
      <SectionShop product={product} />
    </>
  );
}
