import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "../styles/SliderShop.module.scss";

import book1 from "../images/header/book1.png";
import book2 from "../images/sectionSecond/book2.png";
import book3 from "../images/sectionThird/book3.png";
import book4 from "../images/sectionShop/book4.png";

export default function SliderShop() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`${styles.swiperShop} globalSwiper swiperShop`}
      >
        <SwiperSlide className={styles.swiperShop__slide}>
          <div className={styles.wrap}>
            <Image
              className={`${styles.img} ${styles.firstImg}`}
              src={book1}
              alt="book grow into journal"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperShop__slide}>
          <div className={styles.wrap}>
            <Image
              className={`${styles.img} ${styles.secondImg}`}
              src={book2}
              alt="book grow into journal"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperShop__slide}>
          <div className={styles.wrap}>
            <Image
              quality={100}
              className={`${styles.img} ${styles.thirdImg}`}
              src={book3}
              alt="book grow into journal"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperShop__slide}>
          <div className={styles.wrap}>
            <Image
              quality={100}
              className={`${styles.img} ${styles.fourthImg}`}
              src={book4}
              alt="book grow into journal"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
