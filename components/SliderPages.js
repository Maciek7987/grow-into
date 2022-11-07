import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/SliderPages.module.scss";

import screenshot1 from "../images/sectionFifth/screenshot1.png";
import screenshot2 from "../images/sectionFifth/screenshot2.png";
import screenshot3 from "../images/sectionFifth/screenshot3.png";
import screenshot4 from "../images/sectionFifth/screenshot4.png";
import screenshot5 from "../images/sectionFifth/screenshot5.png";

function Product({ text, number, title, paragraph, src, alt }) {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.wrap}>
          <div className={styles.left__rectangle}>{text}</div>
          <div className={`${styles.left__number} italic`}>
            {number}
            <span className={styles.rotate}>/</span>5
          </div>
        </div>
        <h2 className={styles.left__title}>{title}</h2>
        <p className={styles.left__description}>{paragraph}</p>
      </div>
      <div className={styles.right}>
        <Image
          quality={100}
          className={styles.right__img}
          src={src}
          alt={alt}
        />
      </div>
    </>
  );
}

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1.06}
        spaceBetween={17}
        navigation={true}
        modules={[Navigation]}
        className={`${styles.swiperPages} globalSwiper swiperPages`}
        breakpoints={{
          360: {
            width: 331,
          },
        }}
      >
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Be Grateful"
            number="1"
            title="What are you grateful for today?"
            paragraph="Naming what you are grateful for helps you find peace and spend less time thinking about scarcity. By expressing gratitude in the present tense, you call more of these good things into your life."
            src={screenshot1}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Have a great day"
            number="2"
            title="What would make this day great?"
            paragraph="This question starts your day in hopeful energy and can have 
            an amazing effect on your mood. It can be a specific task, a fun activity, or maybe just taking a moment to stop and smell the flowers. The more often you find great things about each day, the easier other positive things become to spot."
            src={screenshot2}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Affirm"
            number="3"
            title="Daily Affirmation"
            paragraph="Writing a daily affirmation creates a strong connection between your thoughts and your reality. An affirmation is a simple but powerful way for you to replace negative self — talk with 
            a positive truth closer to your genuine self."
            src={screenshot3}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Reflect"
            number="4"
            title="Daily Reflection"
            paragraph="The Daily Reflection changes every day, with an idea 
            or question that gets you out of your thinking rut. By flexing your self —reflection muscles and letting curiosity guide you, you get to know your true self on a deeper level and can connect with what brings you joy."
            src={screenshot4}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Practice"
            number="5"
            title="Daily Practice"
            paragraph="The Daily Practice also changes every day. Simple activities — like a meditation practice, exercise, or instruction — help you find insightand an inner balance. You’ll see yourself more clearly and find peace in each day. Repeat practices you like or try a new one each day. Your inner voice will tell you what is right for you."
            src={screenshot5}
            alt={"screenshot"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
