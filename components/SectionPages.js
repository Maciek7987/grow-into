import Slider from "./SliderPages";
import styles from "../styles/sectionPages.module.scss";

export default function SectionPages() {
  return (
    <section id="scrollToItWorks" className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>How it works</h1>
          <p className={styles.top__description}>
            Clear structure — Dynamic prompts
          </p>
        </div>
        <div className={styles.slider}>
          <Slider />
        </div>
      </article>
    </section>
  );
}
