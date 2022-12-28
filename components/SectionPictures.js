import Image from "next/image";
import styles from "../styles/SectionPictures.module.scss";
import textImg from "../images/sectionPictures/textImg.svg";
import topImg from "../images/sectionPictures/desktop/topImg.png";
import middleImg from "../images/sectionPictures/desktop/middleImg.png";
import bottomImg from "../images/sectionPictures/desktop/bottomImg.png";

export default function SectionPictures() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <Image
          className={`${styles.img} ${styles.topImg}`}
          quality={80}
          src={topImg}
          alt="woman with book"
        />
        <Image
          className={`${styles.textImg}`}
          quality={80}
          src={textImg}
          alt="just joy, no guilt, no pressures"
        />
        <div className={styles.wrap}>
          <Image
            className={`${styles.wrapTextImg}`}
            quality={80}
            src={textImg}
            alt="just joy, no guilt, no pressures"
          />
          <Image
            className={`${styles.img} ${styles.middleImg}`}
            quality={80}
            src={middleImg}
            alt="woman with book"
          />
        </div>
        <Image
          className={`${styles.img} ${styles.bottomImg}`}
          quality={80}
          src={bottomImg}
          alt="woman with book in cafe"
        />
      </article>
    </section>
  );
}
