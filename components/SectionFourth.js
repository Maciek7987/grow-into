import Image from "next/image";
import styles from "../styles/SectionFourth.module.scss";
import justJoy from "../images/sectionFourth/picture.png";

export default function SectionFourth() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            About <span className="bigLetter">Us</span>
          </h1>
          <p className={styles.top__description}>
            <span className={styles.smallWidth}>
              The team behind the Grow Into journal are just like you – in
              search of happiness and a positive life. We{" "}
            </span>
            tried countless guided journals in this search, but none felt quite
            right. So we created this journal as a space where you can just be.
            We hope that the{" "}
            <span className={styles.smallWidth}>
              Grow Into journal will bring you what it has brought us: a chance
              to discover your true self.
            </span>
          </p>
        </div>
        <div className={styles.main}>
          <Image
            className={styles.main__img}
            src={justJoy}
            alt="just joy, no guilt, no pressures"
          />
        </div>
      </article>
    </section>
  );
}
