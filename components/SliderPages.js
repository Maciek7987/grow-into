import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "../styles/SliderPages.module.scss";

import screenshot1 from "../images/sectionPages/screenshot1.png";
import screenshot2 from "../images/sectionPages/screenshot2.png";
import screenshot3 from "../images/sectionPages/screenshot3.png";
import screenshot4 from "../images/sectionPages/screenshot4.png";
import screenshot5 from "../images/sectionPages/screenshot5.png";

function Product({ text, number, title, paragraph, src, alt }) {
  return (
    <>
      <div className={styles.left}>
        <div className={styles.wrap}>
          <div className={styles.left__rectangle}>{text}</div>
          <div className={`${styles.number} italic`}>
            {number}
            <span className={styles.rotate}>/</span>5
          </div>
        </div>
        <h2 className={styles.left__title}>{title}</h2>
        {paragraph}
      </div>
      <div className={styles.right}>
        <Image
          unoptimized={true}
          className={styles.right__img}
          src={src}
          alt={alt}
        />
      </div>
    </>
  );
}

export default function SliderPages() {
  const [percentages, setPercentages] = useState(0);
  return (
    <>
      <div
        className={` ${styles.numberForLargeDevice} ${styles.number} italic`}
      >
        <div
          className={styles.wrap}
          style={{ transform: `translateY(-${percentages}%)` }}
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <span className={styles.rotate}>/</span>5
      </div>
      <Swiper
        speed={500}
        onSlideChange={(swiper) => setPercentages(swiper.activeIndex * 100)}
        slidesPerView={1.1}
        spaceBetween={17}
        navigation={true}
        modules={[Navigation]}
        className={`${styles.swiperPages} globalSwiper swiperPages`}
        breakpoints={{
          860: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Be Grateful"
            number="1"
            title="What are you grateful for today?"
            paragraph={
              <p className={styles.left__description}>
                Naming what you are grateful for helps you find peace and spend
                less time thinking about scarcity. By expressing gratitude in
                the present tense, you call more of these good things into your
                life.
              </p>
            }
            src={screenshot1}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Have a great day"
            number="2"
            title="What would make this day great?"
            paragraph={
              <p className={styles.left__description}>
                This question starts your day in hopeful energy and can have an
                amazing effect on your mood. It can be a specific task,
                <span className={styles.smallWidth}>
                  {" "}
                  a fun activity, or maybe just taking a moment to stop and
                  smell the flowers. The more often you find great things about
                </span>
                each day, the easier other positive things become to spot.
              </p>
            }
            src={screenshot2}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Affirm"
            number="3"
            title="Daily Affirmation"
            paragraph={
              <p className={styles.left__description}>
                Writing a daily affirmation creates a strong connection between
                your thoughts and your reality. An affirmation is a simple but
                <span className={styles.smallWidth}>
                  {" "}
                  powerful way for you to replace negative self — talk with a
                  positive truth closer to your genuine self.
                </span>
              </p>
            }
            src={screenshot3}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Reflect"
            number="4"
            title="Daily Reflection"
            paragraph={
              <p className={styles.left__description}>
                <span className={styles.smallWidth}>
                  The Daily Reflection changes every day, with an idea
                </span>{" "}
                or question that gets you out of your thinking rut. By flexing
                your self —reflection muscles and letting curiosity guide you,
                you get to know your true self on a deeper level and can connect
                with what brings you joy.
              </p>
            }
            src={screenshot4}
            alt={"screenshot"}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperPages__slide}>
          <Product
            text="Practice"
            number="5"
            title="Daily Practice"
            paragraph={
              <p className={styles.left__description}>
                <span className={styles.smallWidth}>
                  The Daily Practice also changes every day. Simple activities
                </span>{" "}
                — like a meditation practice, exercise, or instruction — help
                you find insightand an inner balance. You’ll see yourself more
                clearly and find peace in each day. Repeat practices you like or
                try a new one each day. Your inner voice will tell you what is
                right for you.
              </p>
            }
            src={screenshot5}
            alt={"screenshot"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
