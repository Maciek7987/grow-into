import Slider from "./SliderShop";
import styles from "../styles/SectionShop.module.scss";

export default function SectionShop() {
  return (
    <section className={styles.section}>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Grow <span className="bigLetter">Into</span>{" "}
            <span className="bigLetter">Journal</span>
          </h1>
          <h2 className={styles.top__price}>45 USD</h2>
        </div>
        <div className={styles.slider}>
          <Slider />
        </div>
        <div className={styles.main}>
          <p className={styles.main__description}>
            The Grow Into Journal helps you learn who you are and inspires
            genuine joy as a result. In this journal you will find:
          </p>
          <ul className={styles.main__list}>
            <li className={styles.item}>90 individual daily pages</li>
            <li className={styles.item}>
              Clear structure for a comforting routine
            </li>
            <li className={styles.item}>
              Prompts to help you get to know yourself
            </li>
            <li className={styles.item}> Exercises to help ground you</li>
          </ul>
          <p className={styles.main__summary}>
            The Grow Into Journal works every time you use it — whenever you use
            it.
          </p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.bottom__description}>
            Dimension: 142x210 mm, 94 pages, ISBN 83248392034
          </p>
          <button className={styles.bottom__btn}>Buy now</button>
        </div>
      </article>
    </section>
  );
}
