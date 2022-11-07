import Image from "next/image";
import styles from "../styles/SectionSixth.module.scss";
import textImg from "../images/SectionSixth/textImg.svg";
import topImg from "../images/SectionSixth/moblie/topImg.png";
import middleImg from "../images/SectionSixth/moblie/middleImg.png";
import bottomImg from "../images/SectionSixth/moblie/bottomImg.png";

export default function SectionThird() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <Image
          className={`${styles.img} ${styles.topImg}`}
          src={topImg}
          alt="woman with book"
        />
        <Image
          className={`${styles.img} ${styles.textImg}`}
          src={textImg}
          alt="just joy, no guilt, no pressures"
        />
        <Image
          className={`${styles.img} ${styles.middleImg}`}
          src={middleImg}
          alt="woman with book"
        />
        <Image
          className={`${styles.img} ${styles.bottomImg}`}
          src={bottomImg}
          alt="woman with book in cafe"
        />
      </article>
    </section>
  );
}
