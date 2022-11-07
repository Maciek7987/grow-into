import Slider from "./SliderPages";
import styles from "../styles/SectionFifth.module.scss";

export default function SectionFourth() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>How it works</h1>
          <p className={styles.top__description}>
            Clear structure — Dynamic prompts
          </p>
        </div>
        <div className={styles.main}>
          <Slider />
        </div>
      </article>
    </section>
  );
}
